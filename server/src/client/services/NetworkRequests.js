import React from "react";
import axios from "axios"
import { VIEWED_PROPERTIES_KEY } from "../utils/constants"
import { getAuthToken, getSource } from "../utils/utility"
import Algolia from "./Algolia"

const CONTENT_URL = process.env.BASE_URL_CONTENT
const LEGION_URL = process.env.NEXT_LEGION_URL + "api/"
const COOKIE = process.env.COOKIE
const CONTENT_TYPE = process.env.CONTENT_TYPE
const AUTHORIZATION = process.env.AUTHORIZATION
const headers = {
  "auth-token": getAuthToken(),
}
const source = getSource()

export const sendListingTraffic = async (listing_ids) => {
  let url = `${LEGION_URL}external/stats/listing_traffic`
  const authToken = getAuthToken()
  const authorization = AUTHORIZATION
  const contentType = CONTENT_TYPE
  const cookie = COOKIE
  const headers = {
    "auth-token": authToken,
    Authorization: authorization,
    "Content-Type": contentType,
    Cookie: cookie,
  }
  const requestBody = {
    listing_ids: listing_ids,
    lead_type: "view",
    source: source,
    portal: "prop",
  }
  const config = {
    method: "post",
    url: url,
    headers: headers,
    data: requestBody,
  }
  const resp = await axios(config)
    .then((resp) => resp)
    .catch((error) => error)

  if (resp.status == 200) {
    return "SUCCESS"
  } else {
    return "ERROR"
  }
}

export const sendLead = async (listingId, type, lead_type) => {
  let url = `${LEGION_URL}external/stats/listing_lead`
  const requestBody = {
    listing_ids: [listingId],
    lead_type: lead_type,
    source: source,
    product_type: type,
    portal: "prop",
    ...(lead_type == "sms" && {
      message_type: "sms",
    }),
  }
  const config = {
    method: "post",
    url: url,
    headers: headers,
    data: requestBody,
  }

  const resp = await axios(config)
    .then((resp) => resp)
    .catch((error) => error)

  if (resp.status == 200) {
    return "SUCCESS"
  } else {
    return "ERROR"
  }
}

export const sendEmailLead = async (data) => {
  const url = `${LEGION_URL}public/leads/listing_inquiry`
  const requestBody = {
    name: data?.name,
    email: data?.email,
    cell: data?.phone,
    portal: "prop",
    message: data?.message,
    listing_id: data?.property_id,
    source: source,
  }
  const config = {
    method: "post",
    url: url,
    headers: headers,
    data: requestBody,
  }

  const resp = await axios(config)
    .then((resp) => resp)
    .catch((error) => error)

  if (resp.status == 200) {
    return "SUCCESS"
  } else {
    return "ERROR"
  }
}
export const sendContactUsEmail = async (data) => {
  const { email, phone, name, propertyId, message, ea_alert_source } = data
  const url = `${LEGION_URL}public/contact_us`
  const requestBody = {
    name: name,
    email: email,
    cell: phone,
    subject: propertyId,
    message: message,
    advertise: true,
  }
  const config = {
    method: "post",
    url: url,
    headers: headers,
    data: requestBody,
  }
  const resp = await axios(config)
    .then((resp) => resp)
    .catch((error) => error)

  if (resp.status == 200) {
    return "SUCCESS"
  } else {
    return "ERROR"
  }
}

export const fetchSimilarAds = async (location_id, purpose_id, type_id) => {
  try {
    const res = await Algolia.getAdsIndex().search("", {
      hitsPerPage: 10,
      page: 1,
      filters: `location.externalID:${location_id} AND purpose:${
        purpose_id == 1 ? "for-sale" : "for-rent"
      } AND category.id:${type_id}`,
    })
    return res
  } catch (error) {
    return {
      error: true,
    }
  }
}

export const fetchViewedAds = async (adsIds) => {
  try {
    let newIds = []
    const res = await Algolia.getAdsIndex().search("", {
      filters: `${adsIds.map((id) => `externalID:${id}`).join(" OR ")}`,
    })
    if (res && res.hits) {
      let sortedHits = []
      let adsHash = {}
      for (var hit of res.hits) {
        adsHash[hit.externalID] = hit
      }
      for (var id of adsIds) {
        if (adsHash[id]) {
          sortedHits.push(adsHash[id])
          newIds.push(id)
        }
      }

      localStorage.setItem(VIEWED_PROPERTIES_KEY, JSON.stringify(newIds))
      return sortedHits
    }
    return []
  } catch (error) {
    return {
      error: true,
    }
  }
}

export const fetchAllCitiesLinkForPurposeType = async (purpose_id, type_id) => {
  let res = { error: true }
  try {
    res = await axios.get(
      `${CONTENT_URL}/get-all-location-links?purpose_id=${purpose_id}&location_id=1521&type_id=${type_id}&loc_key=loc1&loc_level=3`
    )
  } catch (error) {
    console.log(error)
  }
  return res
}

export const fetchAllLocationsForPurposeType = async (purpose_id, type_id, city_id) => {
  let res = { error: true }
  try {
    res = await axios.get(
      `${CONTENT_URL}/get-all-location-links?purpose_id=${purpose_id}&location_id=${city_id}&type_id=${type_id}&loc_key=loc3&loc_level=4`
    )
  } catch (error) {
    console.log(error)
  }
  return res
}

export const fetchListings = async (sort, algoliaQueryObj, queryString = "") => {
  try {
    const res = await Algolia.getAdsIndex(!sort ? "popular" : sort).search(queryString, {
      ...algoliaQueryObj,
      hitsPerPage: 25,
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const fetchDeletedListings = async (algoliaQueryObj, queryString = "") => {
  try {
    const res = await Algolia.getDeletedAdsIndex().search(queryString, {
      ...algoliaQueryObj,
      hitsPerPage: 25,
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const fetchLocation = async (id) => {
  try {
    const res = await Algolia.getLocationsIndex().search("", {
      filters: `externalID:${id}`,
    })

    return res.hits[0]
  } catch (error) {
    console.log(error)
  }
}
