import dynamic from "next/dynamic"
import { Fragment, useContext, useState } from "react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { MdMail } from "react-icons/md"
import { Tabs } from "react-simple-tabs-component"
import "react-simple-tabs-component/dist/index.css"
import { GAContext } from "../../pages/_app"
import { sendLead } from "../../services/NetworkRequests"
import { INQUIRY_DESKTOP_IMAGE_GALLLERY_SOURCE } from "../../utils/constants"
import { fireGAEvent, formatPrice, getNewLamudiCDNLargeImage, isAdActive } from "../../utils/utility"
import Container from "../base/container"
import Button from "../common/button"
import { cardSpecs } from "../common/card-horizontal.module.scss"
import Heading from "../common/heading"
import Modal from "../common/react-modal"
import ShowPhoneNumber from "../common/show-phone-number"
import StickyBarBottom from "../common/sticky-bar-bottom"
import { detail, fixedPriceContent, fixedPriceWrap, priceLoc, unit } from "../common/sticky-bar-top.module.scss"
import MessagePopup from "../common/success-popup"
import { Bathroom, Bedroom, LandArea } from "../common/svg-icons"
import SwiperSlider from "../common/swiper-slider"
import * as styles from "./image-gallery-popup.module.scss"
import InquiryForm from "./inquiry"

const Image = dynamic(() => import("../common/image"), { ssr: false })

const sliderSettings = {
  freeMode: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  keyboard: true,
  breakpoints: {},
}

const sliderThumbSettings = {
  slidesPerView: 16,
  centeredSlides: false,
}
const sliderThumbSettingsMobile = {
  slidesPerView: 6,
  centeredSlides: false,
}

const TabOne = ({ images, isMobile, getGalleryActiveSlideIndex, title }) => {
  const getSwiperIndex = (swiper) => {
    const slideChangeIndex = swiper.activeIndex
    getGalleryActiveSlideIndex(slideChangeIndex)
  }
  return (
    <Fragment>
      <div className={styles.popupGallery}>
        <SwiperSlider
          silderType="thumbSlider"
          className={`${styles.gallerySlide} u-mb32`}
          sliderOptions={sliderSettings}
          customThumbsSetting={isMobile ? sliderThumbSettingsMobile : sliderThumbSettings}
          onSlideChange={(swiper) => getSwiperIndex(swiper)}
          thumbClassName={styles.imageThumbsCenter}
        >
          {images.map((slide, i) => {
            return <Image src={slide} key={i} alt={title.en} title={title.en} />
          })}
        </SwiperSlider>
      </div>
    </Fragment>
  )
}

const TabTwo = ({ videos, isMobile }) => {
  return (
    <Fragment>
      <div className={styles.popupGallery}>
        <SwiperSlider
          silderType="thumbSlider"
          className={`${styles.gallerySlide} u-mb32`}
          sliderOptions={sliderSettings}
          customThumbsSetting={sliderThumbSettingsMobile}
          thumbClassName={`${styles.videoThumbs} ${styles.imageThumbsCenter}`}
        >
          {videos.map((video, i) => {
            return (
              <iframe
                className={styles.videoFrame}
                allowfullscreen
                allow="autoplay; encrypted-media"
                src={video}
              ></iframe>
            )
          })}
        </SwiperSlider>
      </div>
    </Fragment>
  )
}

const ImageGalleryPopup = (props) => {
  const {
    details,
    openCallModal,
    isMobile,
    galleryPopupTabIndex,
    galleryInitialSlideIndex,
    getGalleryActiveSlideIndex,
    areaLabel,
  } = props

  sliderSettings.initialSlide = galleryInitialSlideIndex

  const [showEmailModal, setShowEmailModal] = useState(false)
  const handleOpenEmailModal = () => setShowEmailModal(true)
  const handleCloseEmailModal = () => setShowEmailModal(false)

  const [inquirySuccess, setInquiryStatus] = useState(false)

  const [GAHash, setGAHash] = useContext(GAContext)

  const { images, price, area, beds, baths, id, videos, purpose_id, title, status } = details

  const tabs = []
  if (images && images.length > 0) {
    tabs.push({
      label: `${images?.length} Photos`,
      index: 1,
      Component: () => (
        <TabOne
          images={images.map((slide, i) => {
            const uuid = slide?.uuid ? slide?.uuid : ""
            let imageURL = getNewLamudiCDNLargeImage(uuid)
            return imageURL
          })}
          isMobile={isMobile}
          getGalleryActiveSlideIndex={getGalleryActiveSlideIndex}
          title={title}
        />
      ),
    })
  }

  if (videos && videos.length > 0) {
    tabs.push({
      label: `${videos.length} ${videos.length > 1 ? "Videos" : "Video"}`,
      index: 2,
      Component: () => (
        <TabTwo
          videos={videos.map((video, i) => {
            let url = video.embed_url
            return url
          })}
          isMobile={isMobile}
        />
      ),
    })
  }

  // Tab selection State
  const [selectedTab, setSelectedTab] = useState(tabs[galleryPopupTabIndex].index)
  return (
    <Container className="u-py16">
      <div className={`${fixedPriceWrap} ${styles.galleryPriceWrap} flex flexYcenter flexBetween`}>
        <div className={`${fixedPriceContent} flex flexYcenter u-mb16`}>
          <div className={priceLoc}>
            <div className={`${price} ${styles.galleryPrice} u-mb8`}>
              <small className={unit}>PKR</small> {price > 0 ? formatPrice(price) : "Contact for price"}
            </div>
          </div>
          <div className={`${cardSpecs} ${detail} ${styles.gallerySpec} u-mb0`}>
            <div>
              <LandArea />
              {areaLabel}
            </div>
            {beds && beds > 0 && (
              <div>
                {Bedroom()}
                {`${beds} Beds`}
              </div>
            )}
            {baths && baths > 0 && (
              <div>
                {Bathroom()}
                {`${baths} Baths`}
              </div>
            )}
          </div>
        </div>
        {isAdActive(status) && (
          <div className={`${styles.btnList} u-spbwx8`}>
            <Button
              className={styles.email}
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

                handleOpenEmailModal()
              }}
              variant="secondaryGhostBtn"
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

                openCallModal()
              }}
            />
          </div>
        )}
      </div>

      <Tabs className={styles.galleryTab} tabs={tabs} onClick={setSelectedTab} selectedTab={selectedTab} />

      <div className={styles.imageGalleryButton}>
        <StickyBarBottom
          details={details}
          openCallModal={openCallModal}
          openEmailModal={handleOpenEmailModal}
          isImageGalleryEmailButton
        />
      </div>

      <Modal showModal={showEmailModal} onClickClose={handleCloseEmailModal}>
        <Heading className="u-mb24" variant="h4">
          Ask about the property
        </Heading>
        <InquiryForm
          GACallbackEvent={() => {
            let GAEvent = {
              label: `${purpose_id == 1 ? "buy" : "rent"} - property_detail - ${isMobile ? "web-mobile" : "web"}`,
            }
            const hash = `email_lead-${id}`
            fireGAEvent(
              { ...GAEvent, category: "Lead", action: "email_lead" },
              { ...GAEvent, category: "Unique Leads", action: "email_lead_unique" },
              GAHash,
              hash,
              setGAHash
            )
          }}
          ea_alert_source={INQUIRY_DESKTOP_IMAGE_GALLLERY_SOURCE}
          propertyId={id}
          onSuccess={() => {
            handleCloseEmailModal()
            setInquiryStatus(true)
          }}
        />
      </Modal>
      <Modal showModal={inquirySuccess} onClickClose={() => setInquiryStatus(false)}>
        <MessagePopup
          heading="Success"
          description={"Your message has been sent successfully."}
          icon={<IoIosCheckmarkCircleOutline />}
        />
      </Modal>
    </Container>
  )
}

export default ImageGalleryPopup
