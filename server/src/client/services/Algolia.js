import React from "react";
import algoliasearch from "algoliasearch"

export default class Algolia {
  static #client
  static #adsIndex
  static #deletedAdsIndex
  static #locationIndex

  static #newestAdsIndex
  static #priceDescAdsIndex
  static #priceAscAdsIndex

  static #indexInsMaping = {
    popular: this.#adsIndex,
    date_desc: this.#newestAdsIndex,
    price_desc: this.#priceDescAdsIndex,
    price_asc: this.#priceAscAdsIndex,
    deleted: this.#deletedAdsIndex,
  }

  static #indexNameMapping = {
    popular: "zameen-production-ads-en",
    date_desc: "zameen-production-ads-date-desc-en",
    price_desc: "zameen-production-ads-price-desc-en",
    price_asc: "zameen-production-ads-price-asc-en",
    deleted: "zameen-production-ads-inactive-en",
  }

  static getAdsIndex(sort = "popular") {
    sort = sort in this.#indexInsMaping ? sort : "popular"
    if (!this.#indexInsMaping[sort]) {
      this.#indexInsMaping[sort] = this.getClientInstance().initIndex(this.#indexNameMapping[sort])
    }
    return this.#indexInsMaping[sort]
  }

  static getDeletedAdsIndex() {
    if (!this.#deletedAdsIndex) {
      this.#deletedAdsIndex = this.getClientInstance().initIndex(this.#indexNameMapping['deleted'])
    }
    return this.#deletedAdsIndex
  }

  static getClientInstance() {
    if (!this.#client) {
      this.#client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_KEY)
    }
    return this.#client
  }

  static getSubLocationsQuery = (locationId, exclude) => {
    return {
      filters: `hierarchy.externalID:${locationId} AND level>2${exclude.length > 0 ? " AND NOT " : ""}${exclude
        .map((item) => `externalID:${item}`)
        .join(" AND NOT ")}`,
    }
  }

  static getLocationsIndex() {
    if (!this.#locationIndex) {
      this.#locationIndex = this.getClientInstance().initIndex("zameen-production-locations-en")
    }
    return this.#locationIndex
  }
}
