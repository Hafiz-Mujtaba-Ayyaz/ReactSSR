// import dynamic from "next/dynamic"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
import { MdCameraAlt, MdMail, MdPhone, MdVideocam } from "react-icons/md"
import { sendLead } from "../../services/NetworkRequests"
import {
  convertArea,
  fireGAEvent,
  getAddedAgoValue,
  getDetailSlugFromAlgoliaObject,
  getListingSizeMapImage,
  getNewLamudiCDNListingImage,
} from "../../utils/utility"
import Button from "../common/button"
import ContactDetail from "../contactus/contact-detail"
import InquiryForm from "../detail/inquiry"
import { cues, floatingLabel, iconSvg } from "./card-horizontal.module.scss"
import * as styles from "./card-vertical.module.scss"
import Heading from "./heading"
import Price from "./price"
import Modal from "./react-modal"
import { Bathroom, Bedroom, LandArea } from "./svg-icons"
import { GAContext } from "../../App";

// const Image = dynamic(() => import("./image"), { ssr: false })

const CardVertical = ({ className = "", data = {}, callToAction = false, onSuccess }) => {
  const {
    coverPhoto,
    photoCount,
    videoCount,
    coverVideo,
    createdAt = "",
    baths,
    price,
    rooms,
    location,
    area,
    externalID,
    phoneNumber,
    contactName,
    _geoloc,
    purpose,
    type,
  } = data
  const { lat, lng } = _geoloc
  let province_id = location[1].externalID

  const [GAHash, setGAHash] = useContext(GAContext)

  let coverImgUUID = coverPhoto ? coverPhoto.uuid : undefined

  let locName = `${location[location.length - 1].name}, ${location[location.length - 2].name}`
  let detailSlug = getDetailSlugFromAlgoliaObject(data)

  const [imgUrl, setImageUrl] = useState(getNewLamudiCDNListingImage(coverImgUUID, _geoloc))
  const [callModalState, setCallModalState] = useState(false)
  const [emailModelState, setEmailModelState] = useState(false)

  return (
    <div className={`${className} ${styles.cardVertical}`.trim()}>
      <Link href={detailSlug} prefetch={false}>
        <p>
          <figure className={styles.imgSlides}>
            <Image
              src={
                videoCount > 0 && coverVideo.host == "youtube"
                  ? `https://img.youtube.com/vi/${coverVideo.url.split("/").splice(-1)}/0.jpg`
                  : imgUrl
              }
              onError={() => {
                setImageUrl(getListingSizeMapImage(lat, lng))
              }}
            />
            <div className={`flex u-spbwx4 ${cues}`}>
              {imgUrl && photoCount > 0 ? (
                <div className={`${floatingLabel}`}>
                  <MdCameraAlt className={iconSvg} /> <span>{photoCount}</span>
                </div>
              ) : null}
              {imgUrl && videoCount > 0 ? (
                <div className={`${floatingLabel}`}>
                  <MdVideocam className={iconSvg} /> <span>{videoCount}</span>
                </div>
              ) : null}
            </div>
            <div className={`${styles.date}`}>{`${getAddedAgoValue(createdAt)} ago`}</div>
          </figure>

          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleContainer}>
                <Price className={styles.cardTitle} variant="h4" price={price} />
              </div>
              <div className={`${styles.cardLabel} ${styles.textTruncate}`}>{locName}</div>
            </div>

            <div className={styles.cardSpecs}>
              <div>
                <LandArea />
                {convertArea(area, province_id)}
              </div>
              {rooms > 0 ? (
                <div>
                  <Bedroom />
                  {rooms}
                </div>
              ) : null}

              {baths > 0 ? (
                <div>
                  <Bathroom />
                  {baths}
                </div>
              ) : null}
            </div>
          </div>
        </p>
      </Link>
      {callToAction && (
        <div className={`${styles.btnList} flex u-spbwx8`}>
          <Button
            onClick={() => {
              sendLead(externalID, type, "phone")
              setCallModalState(true)
              let GAEvent = {
                label: `${data.purpose == "for-sale" ? "buy" : "rent"} - similar_ads - ${
                  isMobile ? "web-mobile" : "web"
                }`,
              }
              const hash = `phone_view-${externalID}`

              fireGAEvent(
                { ...GAEvent, category: "Lead", action: "phone_view" },
                { ...GAEvent, category: "Unique Leads", action: "phone_view_unique" },
                GAHash,
                hash,
                setGAHash
              )
            }}
            size="md"
            variant="secondaryBtn"
            icon={<MdPhone />}
          >
            Call
          </Button>
          <Button
            onClick={() => {
              setEmailModelState(true)

              let GAEvent = {
                label: `${data.purpose == "for-sale" ? "buy" : "rent"} - similar_ads - ${
                  isMobile ? "web-mobile" : "web"
                }`,
              }
              const hash = `email_view-${externalID}`

              fireGAEvent(
                { ...GAEvent, category: "Lead", action: "email_view" },
                { ...GAEvent, category: "Unique Leads", action: "email_view_unique" },
                GAHash,
                hash,
                setGAHash
              )
            }}
            size="md"
            variant="secondaryGhostBtn"
            icon={<MdMail />}
          >
            Email
          </Button>
        </div>
      )}

      <Modal showModal={callModalState} onClickClose={() => setCallModalState(false)}>
        <ContactDetail
          purpose={purpose}
          property_id={externalID}
          mobile={phoneNumber.mobile}
          phone={phoneNumber.phone}
          contactPerson={contactName}
          onClickClose={() => setCallModalState(false)}
        />
      </Modal>
      <Modal showModal={emailModelState} onClickClose={() => setEmailModelState(false)}>
        <div>
          <Heading className="u-mb24" variant="h4">
            Ask about the property
          </Heading>
          <InquiryForm
            onSuccess={() => {
              setEmailModelState(false)
              onSuccess()
            }}
            GACallbackEvent={() => {
              let GAEvent = {
                label: `${data.purpose == "for-sale" ? "buy" : "rent"} - email_popup - ${
                  isMobile ? "web-mobile" : "web"
                }`,
              }
              const hash = `email_lead-${externalID}`

              fireGAEvent(
                { ...GAEvent, category: "Lead", action: "email_lead" },
                { ...GAEvent, category: "Unique Leads", action: "email_lead_unique" },
                GAHash,
                hash,
                setGAHash
              )
            }}
            propertyId={externalID}
            setStatus={(st) => console.log(st)}
            setMailModelState={setEmailModelState}
            url={`${process.env.BASE_URL}${detailSlug}`}
          />
        </div>
      </Modal>
    </div>
  )
}

export default CardVertical
