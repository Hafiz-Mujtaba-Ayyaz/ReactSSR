import React from "react";
import { useEffect, useRef, useState } from "react"
import { isMobile } from "react-device-detect"
import { MdMap } from "react-icons/md"
import { cardSpecs } from "../common/card-horizontal.module.scss"
import Heading from "../common/heading"
import Price from "../common/price"
import ReadMore from "../common/read-more"
import StickyBar from "../common/sticky-bar"
import StickyBarBottom from "../common/sticky-bar-bottom"
import StickyBarTop from "../common/sticky-bar-top"
import { Bathroom, Bedroom, LandArea } from "../common/svg-icons"
import * as styles from "./details-description.module.scss"
import { getPruposeObject, getTimeDifference } from "../../utils/utility"

const DetailsDescription = (props) => {
  const { headingClassName = "", detail: details, setMapboxInteractive, areaLabel } = props

  const { location, price, area, beds, baths, type, updated_at, description, purpose_id, mobile } = details
  const purposeDetails = getPruposeObject(purpose_id)
  const purpose_title_alt1 = purposeDetails?.alternate_title
  const originalFormat = updated_at
  const last_updated = getTimeDifference(originalFormat)
  const desPanelRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  const scrollToMapBox = () => props.mapBox.current.scrollIntoView({ behavior: "smooth", inline: "nearest" })

  const handleScroll = () => {
    if (props.stickyPosition === "top") {
      if (desPanelRef?.current) {
        const descriptionPane = desPanelRef.current.getBoundingClientRect()
        descriptionPane.top <= -40 ? setIsSticky(true) : setIsSticky(false)
      }
    } else {
      if (props?.emailFormRef?.current) {
        const emailFormBtn = props.emailFormRef.current.getBoundingClientRect()
        window.innerHeight - emailFormBtn.top >= 0 ? setIsSticky(true) : setIsSticky(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="u-mb24" ref={desPanelRef}>
      <style jsx>{`
        .lbl {
          display: inline-block;
          width: 50%;
        }
      `}</style>
      <StickyBar placement={props.stickyPosition} sticky={isSticky}>
        {props.stickyPosition === "bottom" ? (
          <StickyBarBottom
            details={details}
            purpose_id={purpose_id}
            openCallModal={props.openModal}
            excuteScrollToEmailForm={props.excuteScrollToEmailForm}
            mobileNumber={mobile}
          />
        ) : (
          <StickyBarTop
            areaLabel={areaLabel}
            details={details}
            openCallModal={props.openModal}
            excuteScrollToEmailForm={props.excuteScrollToEmailForm}
          />
        )}
      </StickyBar>
      <div className={`${styles.mapDescription} flex flexBetween`}>
        <div className={`${styles.propInfo} u-mb32`}>
          <div className={`${styles.textMuted} u-mb4`}>{location?.long_title?.en}</div>
          <Price variant="h2" priceUnit="PKR" price={price} />
          <div className={`${cardSpecs} ${styles.specs}`}>
            <div>
              <LandArea />
              <div>{areaLabel}</div>
            </div>
            {beds && beds > 0 ? (
              <div>
                <Bedroom />
                <span className="flex">{`${beds} Beds`}</span>
              </div>
            ) : null}
            {baths && baths > 0 ? (
              <div>
                <Bathroom />
                <span className="flex"> {`${baths} Baths`}</span>
              </div>
            ) : null}
          </div>
          <div className={`${styles.textMuted} u-spbwx8`}>
            <span className={styles.text}>{type?.alternate_title?.en}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.text}>{purpose_title_alt1}</span>
            {isMobile ? (
              <div className={`${styles.date}`}>Updated {last_updated.en}</div>
            ) : (
              <>
                <span className={styles.separator}>•</span>
                <span>Updated {last_updated.en}</span>
              </>
            )}
          </div>
        </div>
        <button
          className={`${styles.mapIcon} flexStart`}
          onClick={() => {
            scrollToMapBox()
            setMapboxInteractive(true)
          }}
        >
          <span className={`${styles.icon} flex flexYcenter flexXcenter u-mb8`}>
            <MdMap />
          </span>
          <span className={styles.text}>View Map</span>
        </button>
      </div>
      <Heading className={`${headingClassName} u-mb16`} variant="h3">
        Description
      </Heading>
      <ReadMore maxCharacterCount="300">{description.en}</ReadMore>
    </div>
  )
}

export default DetailsDescription
