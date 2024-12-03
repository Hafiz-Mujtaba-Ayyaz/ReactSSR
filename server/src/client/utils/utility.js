import cookie from "cookie"
import { BEDS_FILTER_DATA, MAX_RECENT_SEARCHES, RECENT_SEARCHES_KEY, SINDH_LOCATION_ID, typesHash } from "./constants"
import axios from "axios"
import ReactGA from "react-ga4"
import index from "postcss-logical"
import { isMobile } from "react-device-detect"

const BASE_URL = process.env.BASE_URL_CONTENT
const CDN_URL = process.env.CDN_URL
const STATIC_MAP_IMAGES_BASE_URL = process.env.STATIC_MAP_IMAGES_BASE_URL
export const isServer = () => {
  return typeof window === "undefined"
}

export const queryObjectToString = (query) =>
  Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&")

export const recordPageView = (url) => {
  setTimeout(() => {
    ReactGA.send({ hitType: "pageview", page: url })
  }, 10)
}

export const removeDashes = (str, replaceWith) => str?.replace(/ - /g, replaceWith)

export const formatText = (text) =>
  removeDashes(text, " ")
    ?.split(" ")
    ?.filter((it) => !!it)
    ?.join(" ")

export const fireGAEvent = (eventData, uniqueEventData = {}, GAHash, hash, setGAHash) => {
  try {
    ReactGA.event({ ...eventData })
    if (!GAHash[hash]) {
      ReactGA.event({...uniqueEventData})
    }
    setGAHash({ ...GAHash, [hash]: true })
  } catch (error) {}
}

export const isAdActive = (status) => {
  return status.toLowerCase() == "on" || status.toLowerCase() == "edited"
}

export const getPaginationUrl = (query, resolvedUrl, nbPages) => {
  const { searchSlug: ss, citySlug: cs, page, ...trimedQuery } = query
  let queryString = queryObjectToString(trimedQuery)
  let baseLink = `${resolvedUrl.split("?")[0]}`
  let nextPage = page ? +page + 1 : 2
  let prevPage = page ? +page - 1 : null

  let nextPageLink = null
  if (nextPage < nbPages) {
    nextPageLink = `${baseLink}?${!!queryString ? `${queryString}&` : ""}page=${nextPage}`
  }

  let prevPageLink = null
  if (prevPage) {
    prevPageLink = `${baseLink}?${!!queryString ? `${queryString}&` : ""}page=${prevPage}`
  }

  return { nextPageLink, prevPageLink }
}

export const getLabelAreaValues = (area, province_id) => {
  let convertedArea = Math.round(
    convertAreaGeneral(area, "Square Feet", province_id == SINDH_LOCATION_ID ? "Square Yard" : "Marla")
  )
  if (province_id == SINDH_LOCATION_ID) {
    return { unit: "SquareYard", area: convertedArea }
  } else {
    return convertedArea >= 20
      ? { unit: "Kanal", area: Math.round(convertedArea / 20) }
      : { unit: "Marla", area: Math.round(convertedArea) }
  }
}

export const getSEOLinks = async ({ location_id, purpose_id, type_id, type_parent_id, province_id, level }) => {
  let links = await axios
    .get(
      `${process.env.BASE_URL_CONTENT}/get-search-pretty-links?purpose_id=${purpose_id}&location_id=${location_id}&type_id=${type_id}&type_parent_id=${type_parent_id}&province_id=${province_id}&level=${level}`
    )
    .then((resp) => resp)
    .catch((error) => error)

  if (links && links.status == 200) {
    return links.data
  }
}
export const getSource = () => {
  return isMobile ? "mobile" : "web"
}
export const getBreadcrumbs = async (locs, purpose_id, type_id) => {
  let url = `${
    process.env.BASE_URL_CONTENT
  }/get-breadcrumbs?purpose_id=${purpose_id}&type_id=${type_id}&locs=${locs.join(",")}`

  let resp = await axios
    .get(url)
    .then((resp) => resp)
    .catch((error) => error)

  if (resp && resp.status == 200) {
    return resp.data.breadcrumbs
  }
}
export const getLegionUrl = () => {
  return process.env.NEXT_LEGION_URL
}
export const getAuthToken = () => {
  return process.env.AUTH_TOKEN
}
export const getDetailLinks = async ({
  location_id,
  purpose_id,
  type_id,
  type_parent_id,
  province_id,
  level,
  area_unit,
  label_area_unit,
  locs,
}) => {
  console.log(
    `${process.env.BASE_URL_CONTENT}/get-detail-links?location_id=${location_id}&purpose_id=${purpose_id}&type_id=${type_id}&type_parent_id=${type_parent_id}&area_unit=${area_unit}&label_area_unit=${label_area_unit}&province_id=${province_id}&locs=${locs}&level=${level}`
  )
  let links = await axios.get(
    `${process.env.BASE_URL_CONTENT}/get-detail-links?location_id=${location_id}&purpose_id=${purpose_id}&type_id=${type_id}&type_parent_id=${type_parent_id}&area_unit=${area_unit}&label_area_unit=${label_area_unit}&province_id=${province_id}&locs=${locs}&level=${level}`
  )

  if (links && links.status == 200) {
    return links.data
  }
}
export const getPruposeObject = (id) => {
  const purposeDetailArray = {
    1: {
      purpose_id: 1,
      purpose_title: "Buy",
      purpose_title_l1: "خرید",
      alternate_title: "For Sale",
      alternate_title_l1: "برائے فروخت",
      purpose_order: 10,
      purpose_htaccess: "sale",
      meta_value: "Buy",
      meta_value_l1: "خرید",
      purpose_outcome_titles: "Sold,For Sale,Under Offer,Property Not Available",
      purpose_outcome_titles_l1: "فروخت شدہ,برائے فروخت,پیشکش کے تحت,پراپرٹی دستیاب نہیں ہ",
    },
    2: {
      purpose_id: 2,
      purpose_title: "Rent",
      purpose_title_l1: "کرایہ پر",
      alternate_title: "For Rent",
      alternate_title_l1: "کرایہ پر دستیاب",
      purpose_order: 20,
      purpose_htaccess: "rent",
      meta_value: "Rentals",
      meta_value_l1: "کرائے",
      purpose_outcome_titles: "Rented,For Rent,Under Offer,Property Not Available",
      purpose_outcome_titles_l1: "کرایہ پر ہے,کرایہ پر دستیاب ہے,پیشکش کے تحت,پراپرٹی دستیاب نہیں ہ",
    },
    3: {
      purpose_id: 3,
      purpose_title: "Wanted",
      purpose_title_l1: "مطلوب",
      alternate_title: "Wanted",
      alternate_title_l1: "مطلوب",
      purpose_order: 30,
      purpose_htaccess: "wanted",
      meta_value: "Looking For",
      meta_value_l1: "تلاش کر رہے ہی",
      purpose_outcome_titles: "Request Fulfilled,Wanted,Under Offer,No Longer Required",
    },
  }
  return purposeDetailArray[id]
}
export const getHomeLinks = async (purpose) => {
  const url = `${process.env.BASE_URL_CONTENT}/get-home-links/${purpose}`
  let { data, error } = await axios.get(url)
  if (!error) {
    return data
  }
  return []
}

export const getType = (id) => {
  for (let item in typesHash) {
    if (typesHash[item].id == id) {
      return typesHash[item]
    }
  }
  return null
}

const getTypeSlug = (id) => {
  for (let item in typesHash) {
    if (typesHash[item].id == id) {
      return typesHash[item].slug.toLowerCase()
    }
  }
  return null
}

export const formatName = (name) =>
  name
    .replace(/\./g, "")
    .replace(/[^\w\s]/gi, " ")
    .split(" ")
    .filter((item) => !!item)
    .join("-")
    .toLowerCase()

export const getSlug = ({ location, location_breadcrumb, type_id, purpose_id }) => {
  return location.level > 3
    ? `/${formatName(location_breadcrumb[2].title.en)}/${getTypeSlug(type_id)}-${
        purpose_id == 2 ? "to-rent" : "for-sale"
      }-in-${formatName(location.title.en)}-${location.id}`
    : `/${formatName(location.title.en)}/${getTypeSlug(type_id)}-${purpose_id == 2 ? "to-rent" : "for-sale"}-${
        location.id
      }`
}

export const getListingBreadCrumbs = (location, hierarchy, level, type_id, purpose_id) => {
  let slug =
    level > 3
      ? `/search/${formatName(hierarchy[2].name)}/${getTypeSlug(type_id)}-${
          purpose_id == 2 ? "to-rent" : "for-sale"
        }-in-${formatName(location.name)}-${location.externalID}`
      : `/search/${formatName(hierarchy.slice(-1)[0].name)}/${getTypeSlug(type_id)}-${
          purpose_id == 2 ? "to-rent" : "for-sale"
        }-${hierarchy.slice(-1)[0].externalID}`
  let title = location.name
  return { slug, title }
}

export const getBackLink = ({ referer, host, currentUrl, prevLink }) => {
  if (referer) {
    let url = new URL(referer)
    if (url.host != host || url.pathname == currentUrl) {
      return prevLink.slug
    } else {
      return referer
    }
  } else {
    return prevLink.slug
  }
}

export const paramsObject = (params) => {
  let paramObj = {}
  params.map((item) => {
    let paramName = item.split("=")[0]
    let paramValue = item.split("=")[1]
    paramObj[paramName] = paramValue
  })
  return paramObj
}

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export function getAreaFromCookies(req) {
  return JSON.parse(parseCookies(req).area_unit || '{ "short": "Marla", "value": "Marla" }')
}

export const removeSpecialCharacters = (str, replaceWith) => str.replace(/[^\w\s]/gi, replaceWith)

export const getDetailSlugFromAlgoliaObject = (listing) => {
  let slug = ""
  let locations = [...listing.location]
  locations.reverse()

  slug +=
    removeSpecialCharacters(locations[0].name, " ") +
    " " +
    removeSpecialCharacters(listing.title, " ") +
    " " +
    listing.externalID
  slug.replace(/[^a-zA-Z ]/g, "")
  slug = slug.toLowerCase()
  slug = slug.split(" ").join("-")
  slug = slug
    .split("-")
    .filter((it) => !!it)
    .join("-")

  return "/property/" + slug + ".html"
}

export const getDetailSlugFromPropertyObject = (property) => {
  let slug = ""
  let locations = property?.location?.breadcrumbs
  locations.reverse()
  slug +=
    removeSpecialCharacters(locations[0].title.en, " ") +
    " " +
    removeSpecialCharacters(property.title.en, " ") +
    " " +
    property.id
  slug.replace(/[^a-zA-Z ]/g, "")
  slug = slug.toLowerCase()
  slug = slug
    .split(" ")
    .join("-")
    .split("-")
    .filter((item) => !!item)
    .join("-")

  return "/property/" + slug + ".html"
}

export const formatNumber = (number = "") => {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

export const getBedsString = (selected, data) => {
  let selectedItems = data.filter((it) => {
    return selected.indexOf(it.slug) != -1
  })
  return selectedItems.map((item) => item.name).join(",")
}

export const getAreaLabel = (areaRange) => {
  let label = `${areaRange.min ? formatNumber(areaRange.min) : "any"} - ${
    areaRange.max ? formatNumber(areaRange.max) : "any"
  }`
  if (label == "any - any") {
    return "Select Area"
  }
  return label
}

export function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1)
}

export const formatPrice = (pr) => {
  let price = parseInt(pr)
  let hash = {
    3: "Thousand",
    4: "Thousand",
    5: "Lakh",
    6: "Lakh",
    7: "Crore",
    8: "Crore",
    9: "Arab",
    10: "Arab",
  }
  let hashKey
  let convertedPrice
  if (price.toString().length % 2 == 0) {
    hashKey = price.toString().length - 1
  } else {
    hashKey = price.toString().length - 2
  }
  convertedPrice = price / Math.pow(10, hashKey)
  convertedPrice = parseFloat(convertedPrice.toFixed(2))
  if (hash[hashKey]) {
    return convertedPrice + " " + hash[hashKey]
  }
  return price
}

export const getTimeDifference = (previousDate) => {
  const date = new Date(previousDate)
  const now = new Date()
  const timeDifference = Math.floor((now - date) / 1000 / 60)
  const minutes = timeDifference % 60
  const hours = Math.floor(timeDifference / 60) % 24
  const days = Math.floor(timeDifference / 60 / 24) % 365
  const years = Math.floor(timeDifference / 60 / 24 / 365)

  return {
    en: `${
      years > 0 ? years + " years" : days > 0 ? days + " days" : hours > 0 ? hours + " hours" : minutes + " minutes"
    } ago`,
    ur: `${
      years > 0 ? years + " سال" : days > 0 ? days + " دن" : hours > 0 ? hours + " گھنٹے " : minutes + " منٹ"
    } پہلے`,
  }
}

export const getNewLamudiCDNLargeImage = (uuid) => {
  if (uuid) {
    return `${CDN_URL}/listing_image/${uuid}/large.jpg`
  }
}

export const getNewLamudiCDNListingImage = (uuid, _geoloc) => {
  if (uuid) {
    return `${CDN_URL}/listing_image/${uuid}/medium.jpg`
  }
  const { lat, lng } = _geoloc
  return getListingSizeMapImage(lat, lng)
}

export const getListingSizeMapImage = (lat, lng) => {
  return `${STATIC_MAP_IMAGES_BASE_URL}/${lng}/${lat}/small.jpg`
}
export const getLargeSizeMapImage = (lat, lng) => {
  return `${STATIC_MAP_IMAGES_BASE_URL}/${lng}/${lat}/large.jpg`
}

export const getAddedAgoValue = (createdAt) => {
  if (createdAt) {
    let d = new Date()
    let diff = d - createdAt * 1000
    diff = diff / 1000
    if (diff < 60) {
      return `${parseInt(diff)} Seconds`
    }
    diff = diff / 60
    diff = Math.round(diff)
    if (diff < 60) {
      if (diff == 1) {
        return `${diff} Minute`
      }
      return `${diff} Minutes`
    }
    diff = diff / 60
    diff = Math.round(diff)
    if (diff == 1) {
      return `${diff} Hour`
    }
    if (diff < 24) {
      return `${diff} Hours`
    }
    diff = parseInt(diff / 24)
    if (diff == 1) {
      return `${diff} Day`
    }
    if (diff < 30) {
      return `${diff} Days`
    }
    diff = parseInt(diff / 30)
    if (diff == 1) {
      return `${diff} Month`
    }
    return `${diff} Months`
  }
}

export const convertArea = (area, province_id = "") => {
  let convertedArea
  if (province_id == SINDH_LOCATION_ID) {
    convertedArea = `${Math.round(convertAreaGeneral(area, "Square Meter", "Square Yard"))} Sq. Yd.`
  } else {
    convertedArea = convertAreaGeneral(area, "Square Meter", "Marla")
    convertedArea =
      convertedArea >= 20 ? `${Math.round(convertedArea / 20)} Kanal` : `${Math.round(convertedArea)} Marla`
  }
  return convertedArea
}

export const isAndroid = (userAgent) => {
  const toMatch = /Android/i
  if (userAgent.match(toMatch)) {
    return true
  }
  return false
}

export const checkUA = (UAString) => {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]

  return toMatch.some((e) => {
    return e.test(UAString) ? true : false
  })
}

export const convertAreaGeneral = (area, area_unit, convert_to) => {
  let area_mapings = {
    "Square Meter": {
      "Square Feet": 10.7639,
      "Square Yard": 1.19599,
      "Square Meter": 1,
      Marla: 0.048,
      Kanal: 0.002,
    },
    "Square Yard": {
      "Square Feet": 9,
      "Square Meter": 0.836127,
      "Square Yard": 1,
      Marla: 0.04,
      Kanal: 0.002,
    },
    "Square Feet": {
      "Square Yard": 0.111111,
      "Square Meter": 0.092903,
      "Square Feet": 1,
      Marla: 0.004444444,
      Kanal: 0.0002222222,
    },
    Marla: {
      "Square Yard": 25,
      "Square Meter": 21,
      "Square Feet": 225,
      Marla: 1,
      Kanal: 0.0500001,
    },
    Kanal: {
      "Square Yard": 500,
      "Square Meter": 418.06368,
      "Square Feet": 4500,
      Marla: 20,
      Kanal: 1,
    },
  }

  return area_mapings[area_unit][convert_to] * area
}

export const getSearchStringFromObj = (params) => {
  let items = []
  for (var key in params) {
    items.push(`${key}=${params[key]}`)
  }
  return items.join("&")
}

export const getParamValue = (paramName, url) => {
  let paramString = url?.split("?")[1]
  if (paramString) {
    let params = []
    if (!!paramString) {
      params = paramString.split("&")
      params = params.filter((param) => param.indexOf(paramName) != -1)
    }
    if (params.length > 0) {
      return params[0].split("=")[1]
    }
  }
  return null
}

export const removeParamsFromUrl = (paramName, url) => {
  let finalUrl = url?.split("?")[0]

  if (finalUrl) {
    let paramString = url.split("?")[1]
    let params = []

    if (!!paramString) {
      params = paramString.split("&")
      params = params.filter((param) => param.indexOf(paramName) == -1)
    }
    if (params.length > 0) {
      return `${finalUrl}?${params.join("&")}`
    }
    return finalUrl
  } else {
    return url
  }
}

export const addParamToUrl = (url, paramValue, paramName) => {
  url = removeParamsFromUrl(paramName, url)

  let paramString = url.split("?")[1]
  let finalUrl = url.split("?")[0]
  let params = paramString?.split("&") || []

  params.push(`${paramName}=${paramValue}`)

  if (params.length > 0) {
    finalUrl = `${finalUrl}?${params.join("&")}`
  }
  return finalUrl
}

export const getBedsSlug = (selected, data) => {
  let selectedItems = data.filter((it) => {
    return selected.indexOf(it.slug) != -1
  })
  return selectedItems.map((item) => item.slug).join(",")
}

export const formatCityName = (value) => value.replace(/\s/g, "-").toLowerCase()

export const filtersToUrl = ({
  selectedCity,
  selectedType,
  purpose_id,
  priceRange,
  areaRange,
  selectedBedFilters,
  selectedChildLocs,
  sort,
  keywords = [],
}) => {
  let url = `/${selectedCity.name.replace(/\s/g, "-").toLowerCase()}/${selectedType.slug.toLowerCase()}-${
    purpose_id == 1 ? "for-sale" : "to-rent"
  }-`
  let params = []
  if (selectedChildLocs?.length > 0) {
    url = `${url}in-${selectedChildLocs[0].name.toLowerCase().split(" ").join("-")}-${selectedChildLocs[0].externalID}`
    selectedChildLocs?.length > 1 &&
      params.push(`location_ids=${selectedChildLocs.map((child) => child.externalID).join(",")}`)
  } else {
    url += selectedCity.externalID
  }

  let unit = JSON.parse(parseCookies().area_unit || "[]").value || "Marla"

  let newPriceRange = { ...priceRange }
  if (priceRange.min > priceRange.max) {
    newPriceRange = { min: priceRange.max, max: priceRange.min }
  }

  let newAreaRange = { ...areaRange }
  if (areaRange.min > areaRange.max) {
    newAreaRange = { min: areaRange.max, max: areaRange.min }
  }

  newPriceRange.min && params.push(`price_min=${newPriceRange.min}`)
  newPriceRange.max && newPriceRange.max != null && params.push(`price_max=${newPriceRange.max}`)
  newAreaRange.min && params.push(`area_min=${convertAreaGeneral(newAreaRange.min, unit, "Square Feet")}`)
  newAreaRange.max && params.push(`area_max=${convertAreaGeneral(newAreaRange.max, unit, "Square Feet")}`)
  sort && params.push(`sort=${sort}`)

  if (keywords && keywords.length > 0) {
    params.push(`keywords=${keywords.join(",")}`)
  }

  selectedBedFilters?.length > 0 ? params.push(`beds_in=${getBedsSlug(selectedBedFilters, BEDS_FILTER_DATA)}`) : ""

  let paramsEncoded = params.join("&")

  paramsEncoded != "" ? (url += "/?" + paramsEncoded) : ""

  return url
}

export const urlToFilters = (url) => {
  let params = url.split("?")[1]
  let query = {}
  if (params) {
    params = params.split("&")
    query = { ...paramsObject(params) }
  }
  let urlWithoutParams = url.split("?")[0]
  let citySlug = urlWithoutParams.split("/")[2]
  let city = citySlug.split("-").join(" ")

  let searchSlug = urlWithoutParams.split("/")[3]
  let purpose = searchSlug.indexOf("rent") == -1 ? "For Sale" : "For Rent"

  let searchSlugSplited = searchSlug.split(purpose == "For Sale" ? "for-sale" : "to-rent")

  let type = typesHash[searchSlugSplited[0].slice(0, -1)].name
  query.type = type
  query.loc = city
  query.purpose = purpose
  query.slug = url

  return query
}

export const getLabels = (query) => {
  let res = { ...query }

  if (res.price_min || res.price_max) {
    let priceLabel = `${res.price_min ? formatPrice(res.price_min) : "any"} - ${
      res.price_max ? formatPrice(res.price_max) : "any"
    }`
    res.price = priceLabel
  }

  if (res.area_min || res.area_max) {
    let unit = JSON.parse(parseCookies().area_unit || "[]").value || "Marla"

    let areaLabel = `${res.area_min ? Math.round(convertAreaGeneral(res.area_min, "Square Feet", unit)) : "any"} - ${
      res.area_max ? Math.round(convertAreaGeneral(res.area_max, "Square Feet", unit)) : "any"
    }`

    res.area = areaLabel
    res.areaUnit = unit
  }
  if (res.beds_in) {
    res.beds = `${decodeURIComponent(res.beds_in).split(",").join(" | ").replace("-1", "Studio")}`
  }

  return res
}

export const saveRecentSearch = async (newUrl, searchObject) => {
  if (typeof localStorage !== "undefined") {
    let savedUrls = await localStorage.getItem(RECENT_SEARCHES_KEY)

    if (savedUrls) {
      let urlsParsed = JSON.parse(savedUrls)
      let index = -1
      for (let i in urlsParsed) {
        if (urlsParsed[i].url === newUrl) {
          index = i
          break
        }
      }
      if (index === -1) {
        urlsParsed.splice(0, 0, searchObject)
        urlsParsed = urlsParsed.slice(0, MAX_RECENT_SEARCHES)
      } else {
        urlsParsed.splice(index, 1)
        urlsParsed.splice(0, 0, searchObject)
      }
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(urlsParsed))
    } else {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify([searchObject]))
    }
  }
}

export const getSearchPaginationRedirectedUrl = (resolvedUrl, query) => {
  const { citySlug, searchSlug, ...rest } = query
  let splitted = resolvedUrl.split("/")
  splitted.pop()
  let searchString = getSearchStringFromObj(rest)
  return `${splitted.join("/")}${searchString && `?${searchString}`}`
}

export const internalLinkingDataMobile = (data) => {
  if (data && data.length > 0) {
    const chunkSize = 3
    const linksGroup = data
      .map((e, i) => {
        return i % chunkSize === 0 ? data.slice(i, i + chunkSize) : null
      })
      .filter((e) => {
        return e
      })
    return linksGroup
  } else {
    return []
  }
}
