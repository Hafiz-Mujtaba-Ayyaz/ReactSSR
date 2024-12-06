import styles from "./contact-detail.module.scss"
import Heading from "../common/heading"
import { fireGAEvent } from "../../utils/utility"
import { useContext } from "react"
import { GAContext } from "../../App"
import { isMobile } from "react-device-detect"

const icons = {
  close: (
    <svg className={styles.popupClose} viewBox="0 0 32 32">
      <path
        fill="#A7A7A7"
        d="M32 3.2L28.8 0 16 12.8 3.2 0 0 3.2 12.8 16 0 28.8 3.2 32 16 19.2 28.8 32l3.2-3.2L19.2 16 32 3.2z"
      />
    </svg>
  ),
  mobile: (
    <svg className={`${styles.contactIcon}`} viewBox="0 0 34 34">
      <path fill="none" d="M0 0h34v34H0z" />
      <path d="M22.466 4.107l-11.732-.012a2.353 2.353 0 00-2.346 2.346v21.117a2.353 2.353 0 002.346 2.347h11.732a2.353 2.353 0 002.346-2.346V6.441a2.343 2.343 0 00-2.346-2.334zm0 21.105H10.734V8.788h11.732z" />
    </svg>
  ),
  copy: (
    <svg className={`${styles.copyIcon}`} viewBox="0 0 11.795 13.657">
      <path d="M8.691 0H1.242A1.245 1.245 0 000 1.242v8.691h1.242V1.242h7.449zm1.862 2.483H3.725a1.245 1.245 0 00-1.242 1.242v8.691a1.245 1.245 0 001.242 1.242h6.829a1.245 1.245 0 001.242-1.242V3.725a1.245 1.245 0 00-1.243-1.242zm0 9.933H3.725V3.725h6.829z" />
    </svg>
  ),
  phone: (
    <svg className={`${styles.contactIcon}`} viewBox="0 0 28 28">
      <path fill="none" d="M0 0h28v28H0z" />
      <path d="M10.236 12.931a13.413 13.413 0 005.835 5.835l1.948-1.948a.88.88 0 01.9-.212 10.1 10.1 0 003.161.5.888.888 0 01.885.885v3.09a.888.888 0 01-.885.885A15.051 15.051 0 017.031 6.916a.888.888 0 01.885-.885h3.1a.888.888 0 01.885.885 10.059 10.059 0 00.5 3.161.889.889 0 01-.221.9l-1.944 1.954z" />
    </svg>
  ),
}

const CopyToClipboardBtn = ({ number, property_id }) => {
  return (
    <button
      className={`${styles.copyWrap} d-flex u-spbwx4`}
      onClick={() => {
        navigator.clipboard.writeText(number.replace(/-/g, ""))
      }}
    >
      {icons.copy}
      <span className={styles.txt}>Copy</span>
    </button>
  )
}

const ContactDetail = ({ contactPerson = "", mobile = "", phone = "", purpose, property_id }) => {
  let mobileExist = !!mobile && !!mobile.replace(/-/g, "")
  let phoneExist = !!phone && !!phone.replace(/-/g, "")

  const [GAHash, setGAHash] = useContext(GAContext)

  return (
    <div className={styles.cdetailPanel}>
      <div className={styles.popupHeader}>
        <Heading className={styles.heading}>Contact Details</Heading>
      </div>
      <div className={styles.contactNumList}>
        <span className={styles.conHdg}>Contact Person</span>
        <span className={styles.personName}>{contactPerson}</span>
      </div>
      <div className={`${styles.contactList} u-spbwy24`}>
        {mobileExist ? (
          <div className={styles.listItem}>
            {icons.mobile}
            <div className={styles.contactNumList}>
              <span className={styles.heading}>Call Mobile</span>
              <span
                onClick={() => {
                  let GAEvent = {
                    label: `${purpose == "for-sale" ? "buy" : "rent"} - contact_popup - ${isMobile ? "web-mobile" : "web"
                      }`,
                  }
                  const hash = `phone_lead-${property_id}`

                  fireGAEvent({ ...GAEvent, category: "Lead", action: "phone_lead" },
                    { ...GAEvent, category: "Unique Leads", action: "phone_lead_unique" },
                    GAHash,
                    hash,
                    setGAHash
                  )
                }}
              >
                <a className={styles.phoneClick} href={`tel:${mobile}`}>
                  {mobile}
                </a>
              </span>
            </div>
            {<CopyToClipboardBtn number={mobile} />}
          </div>
        ) : null}

        {phoneExist ? (
          <div className={styles.listItem} id="popup-contact-mobile">
            {icons.phone}
            <div className={styles.contactNumList}>
              <span className={styles.heading}>Call Phone</span>
              <span
                onClick={() => {
                  let GAEvent = {
                    label: `${purpose == "for-sale" ? "buy" : "rent"} - contact_popup - ${isMobile ? "web-mobile" : "web"
                      }`,
                  }

                  const hash = `phone_lead-${property_id}`

                  fireGAEvent({ ...GAEvent, category: "Lead", action: "phone_lead" },
                    { ...GAEvent, category: "Unique Leads", action: "phone_lead_unique" },
                    GAHash,
                    hash,
                    setGAHash
                  )
                }}
              >
                <a className={styles.phoneClick} id="Phone" href={`tel:${phone}`}>
                  {phone}
                </a>
              </span>
            </div>
            {<CopyToClipboardBtn number={phone} />}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ContactDetail
