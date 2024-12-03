import Algolia from "../services/Algolia"
import { fetchListings, fetchLocation } from "../services/NetworkRequests"
import { areaRangeHash, FILTER_PREFERENCES, priceSliderRangesHash, typesHash } from "./constants"
import { convertAreaGeneral, getType } from "./utility"
const cities = require("./cities.json")

const getLableMax = (value) => (value == areaRangeHash[selectedArea.value].max ? "any" : formatPrice(value))

export const getCityFromId = (id) => {
  let city = {}
  for (const cit of cities) {
    if (cit.externalID == id) {
      return cit
    }
  }
  return null
}

export const initChildLocs = async (location_ids, location_id) => {
  try {
    let ids =
      location_ids != null
        ? location_ids
            .split(",")
            .map((id) => +id)
            .filter((id) => !!id)
        : []
    if (location_id) {
      ids.push(location_id)
    }
    if (ids.length > 0) {
      const res = await Algolia.getLocationsIndex().search("", {
        filters: `${ids.map((loc) => `externalID:${loc}`).join(" OR ")}`,
      })

      return res.hits
    }
    return []
  } catch (err) {
    console.log(err)
    return []
  }
}

export const clearFilters = ({
  updatePurpose,
  selectCity,
  selectType,
  setPriceRange,
  setAreaRange,
  selectChildLocs,
  updateBedroomFilter,
  priceRangeRef,
  areaRangeRef,
  selectedArea,
  updateKeywords,
}) => {
  if (updateKeywords) {
    updateKeywords([])
  }
  updatePurpose(1)
  selectCity({ name: "Lahore", externalID: 1 })
  selectType(getType(1))
  setPriceRange({ min: "", max: "" })
  setAreaRange({ min: "", max: "" })
  selectChildLocs([])
  updateBedroomFilter([])
  priceRangeRef?.current.setRange([priceSliderRangesHash[1].min, null])

  areaRangeRef?.current.setRange([areaRangeHash[selectedArea.value].min, areaRangeHash[selectedArea.value].max])
}

export const initBeds = (beds_in) => {
  if (beds_in) {
    return beds_in.split(",")
  }
  return []
}

export const initType = (searchSlug) => {
  if (searchSlug) {
    let searchSlugSplited = searchSlug.split("to-rent-")
    searchSlugSplited.length == 1 ? (searchSlugSplited = searchSlug.split("for-sale-")) : searchSlugSplited
    let typeSlug = searchSlugSplited[0].slice(0, -1)
    return typesHash[typeSlug]
  }
  return null
}

export const dirtyUrlToFilters = (query) => {
  const {
    area_max = null,
    area_min = null,
    price_max = null,
    price_min = null,
    beds_in = null,
    searchSlug = null,
    location_ids = null,
    keywords = null,
    citySlug = null,
  } = query

  let purpose_id = searchSlug.indexOf("rent") === -1 ? 1 : 2
  let type = typesHash[searchSlug.split(purpose_id == 1 ? "-for-sale" : "-to-rent")[0]]

  let location_id = searchSlug.split("-").splice(-1)[0].replace("/", "")

  let city_id
  let cityName = citySlug.replace(/-/g, " ").toLowerCase()
  for (let city of cities) {
    if (city.name.toLowerCase() == cityName) {
      city_id = city.externalID
    }
  }

  // let locationIds = null
  // if (!!location_ids) {
  //   locationIds = location_ids.split(",")
  // }
  // let keywordsSplitted = null
  // if (!!keywords) {
  //   keywordsSplitted = keywords.split(",")
  // }
  // let beds = null
  // if (!!beds_in) {
  //   beds = beds_in.split(",")
  // }

  let filters = {
    area_max,
    area_min,
    price_max,
    price_min,
    purpose_id,
    type,
    city_id,
    location_id,
    location_ids,
    keywords,
    beds_in,
  }

  return filters
}

export const filtersToAlgoliaQuery = (filters) => {
  const {
    area_max,
    area_min,
    price_max,
    price_min,
    purpose_id,
    type,
    city_id,
    location_id,
    location_ids,
    keywords,
    beds_in,
  } = filters

  let filtersArray = []

  filtersArray.push(`purpose:${purpose_id === 1 ? "for-sale" : "for-rent"}`)
  filtersArray.push(`category.slug:${type.external_slug}`)

  if (!!location_ids) {
    let searchFilter = location_ids.split(",").map((id) => `location.externalID:${id}`)
    filtersArray.push(`(${searchFilter.join(" OR ")})`)
  } else {
    filtersArray.push(`location.externalID:${location_id}`)
  }

  if (price_min && !isNaN(price_min)) {
    filtersArray.push(`price > ${price_min}`)
  }
  if (price_max && !isNaN(price_max)) {
    filtersArray.push(`price < ${price_max}`)
  }

  if (area_min && !isNaN(area_min)) {
    filtersArray.push(`area > ${Math.floor(convertAreaGeneral(area_min, "Square Feet", "Square Meter"))}`)
  }
  if (area_max && !isNaN(area_max)) {
    filtersArray.push(`area < ${Math.ceil(convertAreaGeneral(area_max, "Square Feet", "Square Meter"))}`)
  }

  let bedsQuery = ""

  if (beds_in) {
    let bedSplited = beds_in.split(",")
    bedsQuery = `${bedSplited
      .map((e) => {
        if (!isNaN(e) || e == "6plus") {
          return `rooms${e != "6plus" ? `=${e != -1 ? e : 0}` : ">=6"}`
        }
      })
      .filter((i) => !!i)
      .join(",")}`
    if (!!bedsQuery) {
      bedsQuery = `(${bedsQuery})`
    }
  }

  return { filtersArray, bedsQuery }
}

export const generateAlgoliaQueryFromFilters = (query, filters) => {
  const { filtersArray, bedsQuery } = filtersToAlgoliaQuery(filters)

  let algoliaObj = {
    filters: filtersArray.join(" AND "),
  }
  if (bedsQuery != "") {
    algoliaObj.numericFilters = bedsQuery
  }

  if (!!query?.page && !isNaN(query?.page)) {
    algoliaObj["page"] = query.page - 1
  }

  console.log(algoliaObj)

  return algoliaObj
}

export const pruneFilters = async (query, sort, filterObj) => {
  let prunedFilters = { ...filterObj }
  for (const filter of FILTER_PREFERENCES) {
    for (const flt of filter) {
      flt in filterObj ? delete filterObj[flt] : null
      prunedFilters = generateAlgoliaQueryFromFilters(query, filterObj)
      let resp = await fetchListings(sort, prunedFilters)
      if (resp.nbHits > 10) {
        return resp
      }
    }
  }

  const location = await fetchLocation(filterObj.location_id)
  const { hierarchy } = location
  let hierarchyTrimed = hierarchy.slice(2, -1).reverse()

  for (const loc of hierarchyTrimed) {
    filterObj = { ...filterObj, location_id: loc.externalID }
    prunedFilters = generateAlgoliaQueryFromFilters(query, filterObj)

    let resp = await fetchListings(sort, prunedFilters)
    if (resp.nbHits > 10) {
      return resp
    }
  }
}
