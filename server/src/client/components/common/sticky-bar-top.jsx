import React from "react";
import { useContext } from "react"
import { isMobile } from "react-device-detect"
import { MdMail } from "react-icons/md"
import { GAContext } from "../../pages/_app"
import { sendLead } from "../../services/NetworkRequests"
import { fireGAEvent, formatPrice, isAdActive } from "../../utils/utility"
import Container from "../base/container"
import Button from "./button"
import { cardSpecs } from "./card-horizontal.module.scss"
import ShowPhoneNumber from "./show-phone-number"
import * as styles from "./sticky-bar-top.module.scss"
import { Bathroom, Bedroom, LandArea } from "./svg-icons"

const StickyBarTop = (props) => {
  const { details, areaLabel } = props
  const { beds, baths, price, location, area, purpose_id, id, status } = details

  const [GAHash, setGAHash] = useContext(GAContext)

  return (
    <Container>
      <div className={`${styles.fixedPriceWrap} flex flexYcenter flexBetween`}>
        <div className={`${styles.fixedPriceContent} flex flexYcenter`}>
          <div className={styles.priceLoc}>
            <div className={`${styles.price} u-mb8`}>
              <small className={styles.unit}>PKR</small> {price > 0 ? formatPrice(price) : "Contact for price"}
            </div>
            <div className={styles.location}>{location?.long_title?.en}</div>
          </div>
          <div className={`${cardSpecs} ${styles.details} u-mb0`}>
            <div>
              <LandArea />
              {areaLabel}
            </div>
            {beds > 0 ? (
              <div>
                <Bedroom /> {beds} Beds
              </div>
            ) : null}
            {baths > 0 ? (
              <div>
                <Bathroom /> {baths} Baths
              </div>
            ) : null}
          </div>
        </div>
        {isAdActive(status) && (
          <div className={`${styles.stickyBarButton} u-spbwx8`}>
            <Button
              variant="secondaryGhostBtn"
              onClick={() => {
                let GAEvent = {
                  label: `${purpose_id == 1 ? "buy" : "rent"} - property_detail - ${isMobile ? "web-mobile" : "web"}`,
                }

                const hash = `email_view-${id}`

                fireGAEvent(
                  { ...GAEvent, category: "Lead", action: "email_view" },
                  { ...GAEvent, category: "Unique Leads", action: "email_view_unique" },
                  GAHash,
                  hash,
                  setGAHash
                )

                props.excuteScrollToEmailForm()
              }}
            >
              <MdMail /> Send Email
            </Button>
            <ShowPhoneNumber
              className={styles.phoneButton}
              onClick={() => {
                sendLead(id, "property", "phone")

                let GAEvent = {
                  label: `${purpose_id == 1 ? "buy" : "rent"} - property_detail - ${isMobile ? "web-mobile" : "web"}`,
                }

                const hash = `phone_view-${id}`
                fireGAEvent(
                  { ...GAEvent, category: "Lead", action: "phone_view" },
                  { ...GAEvent, category: "Unique Leads", action: "phone_view_unique" },
                  GAHash,
                  hash,
                  setGAHash
                )

                props.openCallModal()
              }}
            />
          </div>
        )}
      </div>
    </Container>
  )
}

export default StickyBarTop
