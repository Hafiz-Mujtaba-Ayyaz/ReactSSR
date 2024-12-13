import React from "react";
import { useContext } from "react"
import { isMobile } from "react-device-detect"
import { MdMail, MdPhone, MdSms } from "react-icons/md"
import { GAContext } from "../../pages/_app"
import { sendLead } from "../../services/NetworkRequests"
import { fireGAEvent, isAdActive, isAndroid, isServer } from "../../utils/utility"
import Button from "./button"
import { btn } from "./button.module.scss"
import * as styles from "./sticky-bar-bottom.module.scss"

const StickyBarBottom = (props) => {
  const { mobileNumber, purpose_id, details } = props

  const [GAHash, setGAHash] = useContext(GAContext)

  const { id, status } = details
  let seperator = "?"
  let url = ""
  if (!isServer()) {
    seperator = isAndroid(navigator?.userAgent) ? "?" : "&"
    url = window.location.href
  }
  let text = `sms:${mobileNumber}${seperator}body=${`I would like to inquire about your property ${url}. Please contact me at your earliest convenience.`}`

  if (isAdActive(status)) {
    return (
      <div className={`${styles.pviewStickyBottom} u-spbwx8 flex flexXcenter flexYcenter`}>
        <span
          onClick={() => {
            let GAEvent = {
              label: `${purpose_id == 1 ? "buy" : "rent"} - property_detail - ${isMobile ? "web-mobile" : "web"}`,
            }
            const hash = `sms_lead-${id}`

            fireGAEvent(
              { ...GAEvent, category: "Lead", action: "sms_lead" },
              { ...GAEvent, category: "Unique Leads", action: "sms_lead_unique" },
              GAHash,
              hash,
              setGAHash
            )

            sendLead(id, "property", "sms")
          }}
        >
          <a className={`${styles.smsBtn} ${btn} inlineFlex flexXcenter flexYcenter`} href={text}>
            <MdSms /> SMS{" "}
          </a>
        </span>
        <Button
          className={styles.call}
          variant="secondaryBtn"
          onClick={() => {
            props.openCallModal()
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
          }}
        >
          <MdPhone /> CALL
        </Button>
        <Button
          variant="secondaryGhostBtn"
          onClick={() => {
            props.isImageGalleryEmailButton ? props.openEmailModal() : props.excuteScrollToEmailForm()

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
          }}
        >
          <MdMail /> EMAIL
        </Button>
      </div>
    )
  }
  return (
    <div className={`${styles.pviewStickyBottom} u-spbwx8 flex flexXcenter flexYcenter`}>
      <p
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: 500,
        }}
      >
        This property is no longer available
      </p>
    </div>
  )
}

export default StickyBarBottom
