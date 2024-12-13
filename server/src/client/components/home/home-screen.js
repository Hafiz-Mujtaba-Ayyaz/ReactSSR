import React from "react";
// import dynamic from "next/dynamic"
import { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { buySlug, rentSlug } from "../../utils/constants"
import LayoutGrid from "../base/layout-grid"
import Heading from "../common/heading"
import LinkGrid from "../common/link-grid"
import Sheet from "../common/sheet"
import SheetLink from "../common/sheet-link"
import * as styles from "../home/home-screen.module.scss"
import RecentSearches from "../listing/recent-searches"
import ViewedProperties from "../listing/viewed-properties"


// const RecentSearches = dynamic(() => import("../listing/recent-searches"), { ssr: false })
// const ViewedProperties = dynamic(() => import("../listing/viewed-properties"), { ssr: false })

export default function Home(props) {
  const { allLinks, isMobile, purpose } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sheetData, setSheetData] = useState(undefined)

  const triggerMenu = () => {
    setIsMenuOpen(true)
  }
  const viewAllLocationRentLinkHash = {
    0: "/pakistan-houses-rentals.html",
    1: "/pakistan-flats-apartments-rentals.html",
  }
  const viewAllLocationBuyLinkHash = {
    0: "/pakistan-houses-buy.html",
    1: "/pakistan-residential-plots-buy.html",
    2: "/pakistan-flats-apartments-buy.html",
  }

  let linksParsed = allLinks.map((section) => {
    const { title, links } = section

    const dataParsed = links.map((link) => ({
      title: link.title,
      links: link.links.map(({ slug, ads_count, link_text: title }) => ({ href: slug, count: ads_count, title })),
    }))

    return (
      <>
        <div
          className={`${styles.popularLocationLink} flex flexYcenter flexXcenter u-mb8`}
          onClick={() => {
            setSheetData({ title, data: dataParsed })
            triggerMenu()
          }}
        >
          {title}
          <MdKeyboardArrowRight />
        </div>
        {isMenuOpen ? (
          <Sheet position="right" activeState={isMenuOpen} setSheetState={setIsMenuOpen}>
            <SheetLink data={sheetData.data} heading={sheetData.title} />
          </Sheet>
        ) : null}
      </>
    )
  })

  return (
    <>
      <RecentSearches headingSize={styles.popularLinksHeading} className={`${styles.recentSearches} u-mb32`} />
      <ViewedProperties headingSize={styles.popularLinksHeading} className="u-mb32" />
      {!isMobile ? (
        <div>
          {allLinks.map((section, sectionIndex) => {
            const { title, display, links } = section

            return (
              <div className={`${styles.popularLinks}`}>
                <Heading className={`${styles.popularLinksHeading} u-mb24`} variant="h3">
                  {title}
                </Heading>
                {display == "horizontal" ? (
                  links.map((link, i) => {
                    return (
                      <div key={i}>
                        <LinkGrid
                          title={link.title}
                          headingVariant="h4"
                          gridColumn="3"
                          linkRowGap="8px"
                          className={`${styles.popularLinksText} u-mb24`}
                          viewAllLocationLink={
                            sectionIndex == 0
                              ? purpose == buySlug
                                ? viewAllLocationRentLinkHash[i]
                                : viewAllLocationBuyLinkHash[i]
                              : undefined
                          }
                          data={link.links.map((li) => ({
                            count: li.ads_count,
                            href: `${li.slug}`,
                            title: li.link_text,
                          }))}
                        />
                      </div>
                    )
                  })
                ) : (
                  <LayoutGrid className={styles.popularLinksText} gridColumns="3">
                    {links.map((link, i) => {
                      return (
                        <div key={i}>
                          <LinkGrid
                            title={link.title}
                            headingVariant="h4"
                            gridColumn="3"
                            linkRowGap="8px"
                            data={link.links.map((li) => ({
                              count: li.ads_count,
                              href: `${li.slug}`,
                              title: li.link_text,
                            }))}
                          />
                        </div>
                      )
                    })}
                  </LayoutGrid>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className={`${styles.popularLocationSec} u-mb32`}>
          <Heading className="u-mb16" variant="h3">
            Popular Locations
          </Heading>
          {linksParsed}
        </div>
      )}
    </>
  )
}
