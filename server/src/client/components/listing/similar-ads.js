import React from "react";
import { useEffect, useState } from "react"
import { fetchSimilarAds } from "../../services/NetworkRequests"
import AdsList from "./ads-list"

const SimilarAds = (props) => {
  const {
    type_title,
    purpose_title_alt1,
    location_text,
    type_id,
    purpose_id,
    location_id,
    property_id,
    onSuccess,
  } = props
  const [ads, setAds] = useState([])
  useEffect(() => {
    const getSimilarAds = async() => {
      const res = await fetchSimilarAds(location_id, purpose_id, type_id)
      if (!res.error) {
        setAds(res.hits)
      }
    }
    getSimilarAds();
  }, [])
  if (ads && ads.length > 0) {
    return (
      <div className="u-mb54">
        <AdsList
          onSuccess={onSuccess}
          title={`${type_title?.en || ""} ${purpose_title_alt1} around ${location_text?.en}`}
          listData={ads.filter((ad) => ad.externalID != property_id)}
          callToAction={true}
        />
      </div>
    )
  }
  return null
}

export default SimilarAds
