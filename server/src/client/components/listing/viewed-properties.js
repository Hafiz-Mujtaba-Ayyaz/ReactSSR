import { useEffect, useState } from "react"
import { VIEWED_PROPERTIES_KEY } from "../../utils/constants"
import { fetchViewedAds } from "../../services/NetworkRequests"
import AdsList from "./ads-list"
import Heading from "../common/heading"

const ViewedProperties = ({ className = "", headingSize = "" }) => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    const getViewedAds = async() => {
    if (typeof localStorage != "undefined") {
      const ids = localStorage.getItem(VIEWED_PROPERTIES_KEY)
      const parsedIds = JSON.parse(ids)
      if (parsedIds && parsedIds.length > 0) {
        const res = await fetchViewedAds(parsedIds)
        if (!res.error) {
          setAds(res)
        }
      }
    }}
    getViewedAds();
  }, [])
  if (ads && ads.length > 0) {
    return (
      <>
        <Heading className={headingSize} variant="h3"> Recently Viewed</Heading>
        <div className={className}>
          <AdsList className="u-mb32" listData={ads} />
        </div>
      </>
    )
  }
  return null
}

export default ViewedProperties
