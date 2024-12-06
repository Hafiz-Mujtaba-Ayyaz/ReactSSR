import { useEffect, useState } from "react"
import ListingsPageComponent from "../../components/listing/listing-page-component"
import { getCityFromId, initChildLocs } from "../../utils/filter-utlils"
import {
  getLabels,
  getParamValue,
  recordPageView,
  removeParamsFromUrl,
  saveRecentSearch,
  urlToFilters,
} from "../../utils/utility"

const ListingsPage = (props) => {
  const { resolvedUrl, initialFilters, location } = props
  const { location_id } = initialFilters

  const [filters, setFilters] = useState(initialFilters)

  const setUrlCookie = async () => {
    let newUrl = removeParamsFromUrl("citySlug", resolvedUrl)
    newUrl = removeParamsFromUrl("page", newUrl)
    let locationIdsDecoded = decodeURIComponent(getParamValue("location_ids", newUrl))
    let res = await initChildLocs(locationIdsDecoded, newUrl.indexOf("/search") == -1 ? location_id : undefined)
    newUrl = removeParamsFromUrl("searchSlug", newUrl)
    if (locationIdsDecoded == "null" && location?.level > 2) {
      res.push(location)
    }
    let locationNames = res.map((loc) => loc.name)

    if (newUrl.indexOf("search/") != -1) {
      let query = urlToFilters(newUrl)
      let searchItem = getLabels(query)

      let searchObject = { label: { ...searchItem, location_names: locationNames }, url: newUrl }

      saveRecentSearch(newUrl, searchObject)
    } else {
      const { price_min, price_max, area_min, area_max, beds_in, type, purpose_id } = initialFilters
      let labels = getLabels({ price_min, price_max, area_min, area_max, beds_in })
      labels.type = type.name
      labels.slug = newUrl
      labels.loc = getCityFromId(initialFilters.city_id).name
      labels.purpose = purpose_id === 1 ? "For Sale" : "For Rent"

      let searchObject = { label: { ...labels, location_names: locationNames }, url: newUrl }

      saveRecentSearch(newUrl, searchObject)
    }

    return res
  }
  useEffect(() => {
    const initializeFilters = async () => {
    const childLocs = await setUrlCookie()
    let newInitialFilters = { ...initialFilters }
    const filteredChildLocs = childLocs.filter((it) => it.level > 2)
    newInitialFilters.child_locs = filteredChildLocs
    setFilters(newInitialFilters)
    recordPageView(resolvedUrl)
    }
    initializeFilters()
  }, [resolvedUrl])

  return <ListingsPageComponent {...props} initialFilters={filters} />
}

export default ListingsPage
