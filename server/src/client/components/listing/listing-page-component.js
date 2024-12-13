import React from "react";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useReducer, useState } from "react"
import { MdClose, MdExpandMore, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdSearch } from "react-icons/md"
import { fetchLocation, sendListingTraffic } from "../../services/NetworkRequests"
import { REQUEST_SRC_DIRTY, sortListHash } from "../../utils/constants"
import { getCityFromId } from "../../utils/filter-utlils"
import {
  formatCityName,
  formatName,
  formatText,
  getListingBreadCrumbs,
  getSEOLinks,
  getType,
  internalLinkingDataMobile,
} from "../../utils/utility"
import Container from "../base/container"
import Layout from "../base/layout"
import PageLayout from "../base/page-layout"
import Breadcrumb from "../common/breadcrumb"
import { btn, secondaryGhostBtn } from "../common/button.module.scss"
import CardHorizontal from "../common/card-horizontal"
import Heading from "../common/heading"
import HeadingWithCount from "../common/heading-with-count"
import LinkGrid from "../common/link-grid"
import LinkWithCount from "../common/link-with-count"
import { searchPage } from "../common/navbar.module.scss"
import NoResultFound from "../common/no-result-found"
import Modal from "../common/react-modal"
import SeoLinks from "../common/seo-links"
import LocationListSlide from "../common/slide-link"
import { SEOContent } from "../detail/seo-content"
import Filters from "../filters/filters"
import MobileSearchBar from "../filters/mobile-search-bar"
import Paginate from "../filters/pagination"
import SortingDropDown from "../filters/sorting-dropDown"
import * as styles from "./property-search.module.scss"
import { WarningIcons } from "../common/svg-icons"

const modalTypes = {
  CALL: "CALL",
  EMAIL: "EMAIL",
  SUCCESS: "SUCCESS",
}

const modalReducer = (state, action) => {
  switch (action.type) {
    case modalTypes.CALL:
    case modalTypes.EMAIL:
    case modalTypes.SUCCESS:
      return { ...state, modalContent: action.children, show: true }
    default:
      return { ...state, modalContent: null, show: false }
  }
}

const ListingsPageComponent = (props) => {
  const {
    hits,
    nbHits,
    page,
    hitsPerPage,
    initialFilters,
    isMobile,
    links: initialLinks,
    requestSrc,
    h1,
    meta_title,
    meta_description,
    nextPageLink,
    prevPageLink,
    resolvedUrl,
    seo_content,
    breadcrumbs,
    canonical,
    sort,
    deletedHits,
    location: initialLocation,
  } = props
  useEffect(() => {
    const ids = hits.map((data) => {
      return data?.externalID
    })
    sendListingTraffic(ids)
  }, [])
  const { type, city_id, purpose_id, location_id } = initialFilters

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [links, setLinks] = useState(initialLinks)
  const [readMore, setReadMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [sortOn, setSortingValue] = useState(sortListHash[sort]?.value || "Popular")
  const [location, setLocation] = useState(null)
  const [currentPage, setCurrentPage] = useState(page)

  const [modalState, modalDispatch] = useReducer(modalReducer, {
    modalContent: null,
    show: false,
  })
  const router = useRouter()

  const handleCloseModal = () => modalDispatch({ modalContent: null, show: false })

  const modalDispatchAction = (action, children) => {
    modalDispatch({
      type: action,
      children: children,
    })
  }

  const triggerMenu = () => {
    setIsMenuOpen(true)
  }

  let subLocalitiesParsed = links?.subLocalities?.map(({ slug, ads_count, title }) => {
    return {
      href: `${slug}`,
      count: ads_count,
      title,
    }
  })

  useEffect(() => {
    Object.keys(links || {}).length == 0 ? setIsLoading(true) : setIsLoading(false)
  }, [links])

  const renderAds = () => {
    if (hits && hits.length > 0) {
      return hits.map((adData) => {
        return (
          <CardHorizontal
            data={adData}
            key={adData.externalID}
            modal={modalDispatchAction}
            handleCloseModal={handleCloseModal}
          />
        )
      })
    }
    return null
  }

  const renderDeletedAds = () => {
    if (deletedHits && deletedHits.length > 0) {
      return deletedHits.map((adData) => {
        return (
          <CardHorizontal
            deletedAd
            data={adData}
            key={adData.externalID}
            modal={modalDispatchAction}
            handleCloseModal={handleCloseModal}
          />
        )
      })
    }
    return null
  }

  const nextPage = (selectedPage) => {
    let url = window.location.href
    let urlParams = url.split("?")[1]
    let finalUrl = url.split("?")[0]
    let params = []

    if (urlParams) {
      params = urlParams.split("&")
      params = params.filter((param) => param.indexOf("page") == -1)
    }

    if (selectedPage > 1) {
      params.push(`page=${selectedPage}`)
    }

    if (params.length > 0) {
      finalUrl = `${finalUrl}?${params.join("&")}`
    }
    router.push(finalUrl)
    window.scrollTo(0, 0)
  }

  let city = getCityFromId(city_id)?.name

  const getViewAllCityLinks = ({ city_id, type, purpose_id }) => {
    let city = getCityFromId(city_id)

    let url = "/"
    url += formatName(city.name)
    url += `-${type.slug.toLowerCase()}`
    url += `-${purpose_id == 1 ? "buy" : "rent"}-all-locations.html`
    return url
  }

  const loadLinks = async () => {
    // && location.externalID not need for this check
    if (requestSrc === REQUEST_SRC_DIRTY && location && location.externalID) {
      setLinks({})
      setIsLoading(true)
      let res = await getSEOLinks({
        location_id,
        purpose_id,
        type_id: type.id,
        type_parent_id: type.parentId == type.id ? type.id : type.parentId,
        province_id: location.hierarchy[1].externalID,
        level: location.level + 1,
      })
      setIsLoading(false)
      setLinks({ ...res })
    }
  }

  const getLocation = async () => {
    let locationResp = await fetchLocation(location_id)
    if (locationResp) {
      setLocation(locationResp)
    }
  }

  useEffect(() => {
    getLocation()
  }, [location_id])

  useEffect(() => {
    loadLinks()
  }, [location, type.id, purpose_id])

  useEffect(() => {
    if (resolvedUrl.indexOf("/search") !== -1) {
      loadLinks()
    } else {
      setLinks(props.links)
    }
  }, [resolvedUrl])
  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const getFlipedUrls = () => {
    if (location) {
      let url = `/search/${formatCityName(location.hierarchy[2].name)}/${type.external_slug.toLowerCase()}-${
        purpose_id == 1 ? "for-sale" : "to-rent"
      }`
      if (location.level > 2) {
        url = `${url}-in-${formatCityName(location.hierarchy.slice(-1)[0].name)}-${formatCityName(
          location.hierarchy.slice(-1)[0].externalID
        )}`
      }
      return url
    }
  }
  const flipedUrl = getFlipedUrls()

  const internalLinksDataForMobile = internalLinkingDataMobile(links?.topLocations)
  const showMoreStyles = { maxHeight: "143px", overflow: "hidden" }
  const breadcrumbsDirty = location?.hierarchy
    .slice(2)
    .map((item) => getListingBreadCrumbs(item, location.hierarchy, location.level, type.id, purpose_id))

  const locationName = formatText(location?.name)

  return (
    <>
      <PageLayout
        className={searchPage}
        description={meta_description}
        headTitle={meta_title || `${type.name} for ${purpose_id == 1 ? "Sale" : "Rent"} in ${locationName || city}`}
        bannerless={true}
        nextPageLink={nextPageLink}
        prevPageLink={prevPageLink}
        canonical={canonical}
        resolvedUrl={resolvedUrl}
      >
        {isMobile ? (
          <MobileSearchBar initialFilters={initialFilters} location={location} />
        ) : (
          <Filters initialFilters={initialFilters} location={location} />
        )}

        {location ? (
          <Breadcrumb
            breadcrumbs={breadcrumbs}
            currentLinkText={`${breadcrumbsDirty.slice(-1)[0].title} ${type.name}`}
          />
        ) : null}
        <Container>
          <HeadingWithCount
            className={styles.headingStyleH2}
            variant={"h1"}
            smallText={nbHits > 10000 ? "10,000+" : nbHits}
          >
            {!!h1
              ? h1
              : `${type.h1Name || type.name} ${purpose_id == 1 ? "for sale" : "for rent"} in ${
                  location && location?.level + 1 !== 3 ? `${locationName} ${city}` : city
                }
            ${type.parentId != 3 ? " with Prices & Details" : ""}`}
          </HeadingWithCount>
        </Container>

        <Container>
          <div className={`${styles.locHeader} flex flexYcenter flexBetween u-mb24`}>
            {subLocalitiesParsed?.length > 0 ? (
              <Heading className={`${styles.alternateHeading} u-mb0`} variant="h2">
                {`Locations of ${type.name} ${purpose_id == 1 ? "for sale" : "for rent"} in ${locationName || city}`}
              </Heading>
            ) : null}

            {!isLoading &&
            subLocalitiesParsed?.length > 0 &&
            (flipedUrl || (links?.purposeReverseLink?.slug && links?.purposeReverseLink?.ads_count > 0)) ? (
              <Link href={links?.purposeReverseLink?.slug || flipedUrl} prefetch={false}>
                <p className={`${styles.alternateLink} ${btn} ${secondaryGhostBtn}`}>
                  {links?.purposeReverseLink?.link_text ||
                    `${location.level > 2 ? `${location.hierarchy.slice(-1)[0].name} ` : ""}${city} ${type.name} ${
                      purpose_id == 2 ? "For Rent" : "For Sale"
                    }`}
                  <MdKeyboardArrowRight />
                </p>
              </Link>
            ) : null}
          </div>

          {subLocalitiesParsed && subLocalitiesParsed.length > 0 ? (
            <LocationListSlide
              className={`u-mb32 `}
              data={subLocalitiesParsed}
              viewAllLocation
              viewAllLocationText="All locations"
              viewAllLocationLink={getViewAllCityLinks({ city_id, type, purpose_id, location_id })}
              onClickOpenSheet={triggerMenu}
            />
          ) : null}
          {
            <div style={readMore ? showMoreStyles : {}}>
              {!isMobile ? (
                <LinkGrid data={subLocalitiesParsed} gridColumn="4" linkRowGap="8px" isLoading={isLoading} />
              ) : null}
            </div>
          }

          {!isMobile && subLocalitiesParsed?.length > 16 ? (
            <div className={`${styles.viewAllLocation} flex flexXcenter flexYcenter u-mb24 u-spbwx8`}>
              {city_id == location_id ? (
                <Link href={getViewAllCityLinks({ city_id, type, purpose_id, location_id })} prefetch={false}>
                  <p className={`${styles.link} inlineFlex`}>
                    {`View All Locations in ${city}`} <MdKeyboardArrowRight className={styles.icon} />{" "}
                  </p>
                </Link>
              ) : null}

              <button className={`${styles.showMore} inlineFlex`} onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show More" : "Show Less"}
                <MdExpandMore className={styles.icon} />
              </button>
            </div>
          ) : null}

          <Layout>
            {hits?.length > 0 ? (
              <div id="topListingDiv">
                <div className="flex flexYcenter flexBetween u-mb8">
                  <div>
                    {currentPage * hitsPerPage + 1} – {currentPage * hitsPerPage + hits.length}{" "}
                    <span style={{ marginInline: 4 }}>of</span> {nbHits > 10000 ? "10,000+" : nbHits} Results
                  </div>
                  <SortingDropDown sort={sortOn} setSortingValue={setSortingValue} />
                </div>
                <div className="u-mb32">{renderAds()}</div>
                {deletedHits?.length > 0 ? (
                  <>
                    <div className={`${styles.propNotAvailable} u-mb16`}>
                      <div class={`${styles.icon}`}>
                        <WarningIcons className={styles.unavailableIcon} />
                      </div>
                      <div class={styles.text}>Following Ads have been Deleted</div>
                    </div>
                    <div className={`${styles.propInactive} u-mb32`}>{renderDeletedAds()}</div>
                  </>
                ) : null}

                <Paginate
                  className="u-mb32"
                  pageSize={hitsPerPage}
                  defaultCurrent={1}
                  current={currentPage ? currentPage + 1 : 1}
                  total={nbHits}
                  prevIcon={<MdKeyboardArrowLeft />}
                  nextIcon={<MdKeyboardArrowRight />}
                  showPrevNextJumpers={true}
                  showQuickJumper={true}
                  hideOnSinglePage={true}
                  onChange={nextPage}
                />
                {<SEOContent content={seo_content} />}
              </div>
            ) : (
              <NoResultFound
                className="u-mb24"
                searchIcon={<MdSearch className={styles.searchIcon} />}
                crossIcon={<MdClose className={styles.crossIcon} />}
                text="No Results Found!"
                description="Sorry, there are no active properties matching your criteria."
              />
            )}

            {links?.sideLinks?.length > 0 ? (
              <div>
                <div className={`${styles.useFulLinks} panel u-mb32`}>
                  <Heading className="u-mb16" variant="h4">
                    Useful Links
                  </Heading>

                  {links?.sideLinks?.map(({ slug, ads_count, title }) => {
                    return (
                      <LinkWithCount url={`${slug}`} key={slug} count={ads_count} className="u-mb8">
                        {title}
                      </LinkWithCount>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </Layout>

          {links?.topLocations?.length > 0 ? (
            isMobile ? (
              <div className="u-mb24">
                <Heading className={`${styles.title} u-mb16`} variant="h3">
                  {type.name} for {purpose_id == 1 ? "Sale" : "Rent"} in Top Locations
                </Heading>
                {internalLinkingDataMobile(links?.topLocations).map((e, i) => {
                  return (
                    <SeoLinks
                      key={i}
                      className="u-mb8"
                      headingVariant="h3"
                      data={e.map(({ slug, ads_count, title }) => {
                        return {
                          count: ads_count,
                          title: title,
                          href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                        }
                      })}
                    />
                  )
                })}
              </div>
            ) : (
              <LinkGrid
                className="u-mb40"
                title={`${type.name} for ${purpose_id == 1 ? "Sale" : "Rent"} in Top Locations`}
                headingVariant="h3"
                gridColumn="4"
                linkRowGap="8px"
                data={links?.topLocations?.map(({ slug, title, ads_count }) => {
                  return {
                    count: ads_count,
                    title: title,
                    href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                  }
                })}
              />
            )
          ) : null}

          {links?.areaLinks?.length > 0 ? (
            isMobile ? (
              <div className="u-mb24">
                <Heading className={`${styles.title} u-mb16`} variant="h3">
                  Browse {type.name} {`${purpose_id == 1 ? "for Sale" : "for Rent"}`} by Area Size
                </Heading>
                {internalLinksDataForMobile.map((e, i) => {
                  return (
                    <SeoLinks
                      key={i}
                      className="u-mb8"
                      headingVariant="h3"
                      data={e.map(({ slug, ads_count, title }) => {
                        return {
                          count: ads_count,
                          title: title,
                          href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                        }
                      })}
                    />
                  )
                })}
              </div>
            ) : (
              <LinkGrid
                className="u-mb40"
                title={`Browse ${type.name} ${purpose_id == 1 ? "for Sale" : "for Rent"} by Area Size`}
                headingVariant="h3"
                gridColumn="4"
                linkRowGap="8px"
                data={links?.areaLinks?.map(({ slug, title, ads_count }) => {
                  return {
                    count: ads_count,
                    title: title,
                    href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                  }
                })}
              />
            )
          ) : null}

          {links?.allPropertyTypes?.length > 0 ? (
            isMobile ? (
              <div className="u-mb24">
                <Heading className={`${styles.title} u-mb16`} variant="h3">
                  {`Other Properties for ${purpose_id == 1 ? "Sale" : "Rent"} in ${locationName || city}`}
                </Heading>
                {internalLinkingDataMobile(links?.allPropertyTypes).map((e, i) => {
                  return (
                    <SeoLinks
                      key={i}
                      className="u-mb8"
                      headingVariant="h3"
                      data={e.map(({ slug, ads_count, title }) => {
                        return {
                          count: ads_count,
                          title: title,
                          href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                        }
                      })}
                    />
                  )
                })}
              </div>
            ) : (
              <LinkGrid
                title={`Other Properties for ${purpose_id == 1 ? "Sale" : "Rent"} in ${locationName || city}`}
                headingVariant="h3"
                gridColumn="4"
                linkRowGap="8px"
                data={links?.allPropertyTypes?.map(({ slug, title, ads_count }) => {
                  return {
                    count: ads_count,
                    title: title,
                    href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                  }
                })}
              />
            )
          ) : null}

          {links?.longtail?.length > 0 ? (
            isMobile ? (
              <div className="u-mb24">
                <Heading className={`${styles.title} u-mb16`} variant="h3">
                  Browse by Popular Keywords in {locationName || city}
                </Heading>
                {internalLinkingDataMobile(links?.longtail).map((e, i) => {
                  return (
                    <SeoLinks
                      key={i}
                      className="u-mb8"
                      headingVariant="h3"
                      data={e.map(({ slug, ads_count, title }) => {
                        return {
                          count: ads_count,
                          title: title,
                          href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                        }
                      })}
                    />
                  )
                })}
              </div>
            ) : (
              <LinkGrid
                className="u-mb40"
                title={`Browse by Popular Keywords in ${locationName || city}`}
                headingVariant="h3"
                gridColumn="4"
                linkRowGap="8px"
                data={links?.longtail?.map(({ slug, ads_count, title }) => {
                  return {
                    count: ads_count,
                    title: title,
                    href: `/${slug.indexOf("/") == 0 ? slug.slice(1) : slug}`,
                  }
                })}
              />
            )
          ) : null}
        </Container>
      </PageLayout>

      <Modal showModal={modalState.show} onClickClose={handleCloseModal}>
        {modalState.modalContent}
      </Modal>
    </>
  )
}

export default ListingsPageComponent
