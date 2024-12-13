import React from "react";
// import dynamic from "next/dynamic";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MdAccessTime,
  MdCameraAlt,
  MdMail,
  MdPhone,
  MdVideocam,
} from "react-icons/md";
import { GAContext } from "../../pages/_app";
import { sendLead } from "../../services/NetworkRequests";
import {
  INQUIRY_DESKTOP_SEARCH_LISTING_SOURCE,
  INQUIRY_MOBILE_SEARCH_LISTING_SOURCE,
} from "../../utils/constants";
import {
  convertArea,
  fireGAEvent,
  getAddedAgoValue,
  getDetailSlugFromAlgoliaObject,
  getListingSizeMapImage,
  getNewLamudiCDNListingImage,
  isServer,
} from "../../utils/utility";
import ContactDetail from "../contactus/contact-detail";
import { galleryForm } from "../detail/image-gallery-popup.module.scss";
import InquiryForm from "../detail/inquiry";
import Button from "./button";
import * as styles from "./card-horizontal.module.scss";
import Heading from "./heading";
import Price from "./price";
import MessagePopup from "./success-popup";

// const Image = dynamic(() => import("./image"), { ssr: false });

const icons = {
  landArea: (
    <svg viewBox="0 0 25 25">
      <path d="M12.499 5.668l7.892 4.734-7.892 4.647-7.892-4.651 7.892-4.734v.004zm-9.948 5.639l9.42 5.551a1.046 1.046 0 001.058 0l9.42-5.551a1.04 1.04 0 00.007-1.791l-9.42-5.652a1.042 1.042 0 00-1.072 0L2.543 9.516a1.042 1.042 0 00.008 1.791zM22.276 17.54l1.142-2.957h-3.025l.634 1-5.221 3.213-.583-.915-1.141 2.952h3.025l-.6-.943 5.221-3.213.548.863zM10.918 20.833l-1.142-2.957-.549.863-5.221-3.213.6-.943H1.582l1.142 2.957.583-.915 5.221 3.213-.634 1 3.024-.005z" />
    </svg>
  ),
  bedroom: (
    <svg viewBox="0 0 19 19">
      <path fill="none" d="M0 0h19v19H0z" />
      <path d="M3.733 15.922l-.7-2.058h-1.3v-4.79a1.744 1.744 0 011.736-1.7h.371V3.931a1.745 1.745 0 011.736-1.7h8.435a1.747 1.747 0 011.745 1.7V7.37h.363a1.748 1.748 0 011.747 1.7v4.789h-1.3l-.7 2.058h-.542l-.7-2.058H4.969l-.7 2.058zm-.617-3.408h13.367v-3.8H3.116zm7.376-5.146h3.883V3.573h-3.883zm-5.268 0h3.887V3.573H5.223z" />
      <path d="M3.752 15.899l-.7-2.058H1.756V9.076a1.721 1.721 0 011.712-1.677h.394V3.932a1.721 1.721 0 011.713-1.683h8.439a1.724 1.724 0 011.721 1.681v3.463h.387a1.724 1.724 0 011.722 1.681v4.764h-1.291l-.7 2.058h-.507l-.7-2.058H4.952l-.7 2.061zm-.66-3.359h13.414V8.696H3.092zm7.376-5.146H14.4V3.55h-3.932zm-5.268 0h3.932V3.55H5.199z" />
    </svg>
  ),
  bathroom: (
    <svg viewBox="0 0 19 19">
      <path fill="none" d="M0 0h19v19H0z" />
      <path d="M12.374 16.886v-1.762H6.915v1.762H5.373v-1.818l-.087-.015a5.171 5.171 0 01-4.282-5.11V8.287h1.75V6.419a3.4 3.4 0 016.79-.105H7.996a1.854 1.854 0 00-3.705.105v1.868h14v1.657a5.173 5.173 0 01-4.287 5.109l-.087.015v1.818zM2.54 9.943a3.621 3.621 0 003.6 3.628h7a3.62 3.62 0 003.6-3.628v-.105H2.54z" />
    </svg>
  ),
  heart: (
    <svg
      className={`${styles.iconSvg} ${styles.iconHeart}`}
      viewBox="0 0 20.109 17.846"
    >
      <path d="M17.35 2.086a4.836 4.836 0 00-6.6.481l-.7.718-.7-.718a4.836 4.836 0 00-6.6-.481 5.078 5.078 0 00-.35 7.352l6.852 7.066a1.109 1.109 0 001.6 0l6.85-7.066a5.075 5.075 0 00-.347-7.352z" />
    </svg>
  ),
  camera: (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15.2C13.7674 15.2 15.2 13.7674 15.2 12C15.2 10.2327 13.7674 8.80005 12 8.80005C10.2327 8.80005 8.80005 10.2327 8.80005 12C8.80005 13.7674 10.2327 15.2 12 15.2Z"
        fill="currentColor"
      />
      <path
        d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
        fill="currentColor"
      />
    </svg>
  ),
  camcorder: (
    <svg className={styles.iconSvg} viewBox="0 0 24 24">
      <path
        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
        fill="currentColor"
      />
    </svg>
  ),
};

const CardHorizontal = (props) => {
  const { className = "", data, deletedAd = false } = props;
  const {
    slug = "",
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
    category,
    purpose,
    title,
    shortDescription,
    externalID,
    contactName,
    phoneNumber,
    _geoloc,
    type,
  } = data;
  let province_id = location[1].externalID;
  const { lat, lng } = _geoloc;

  const [GAHash, setGAHash] = useContext(GAContext);

  const handleInquirySuccess = () => {
    props.modal(
      "SUCCESS",
      <MessagePopup
        heading="Success"
        description={"Your message has been sent successfully."}
        icon={<IoIosCheckmarkCircleOutline />}
      />
    );
  };

  let type_purpose_label =
    category[category.length - 1].nameSingular +
    (purpose == "for-sale" ? " for sale" : " for rent");

  let coverImgUUID = coverPhoto ? coverPhoto.uuid : undefined;

  let locName = `${location[location.length - 1].name}, ${
    location[location.length - 2].name
  }`;
  let detailSlug = getDetailSlugFromAlgoliaObject(data);

  const [imgUrl, setImgUrl] = useState(
    getNewLamudiCDNListingImage(coverImgUUID, _geoloc)
  );

  return (
    <>
      <div className={`${className} ${styles.cardHorizontal}`.trim()}>
        <Link href={detailSlug} prefetch={false}>
          <figure className={styles.imgSlides}>
            <Image
              src={
                videoCount > 0 && coverVideo.host == "youtube"
                  ? `https://img.youtube.com/vi/${coverVideo.url
                      .split("/")
                      .splice(-1)}/0.jpg`
                  : imgUrl
              }
              onError={() => {
                setImgUrl(getListingSizeMapImage(lat, lng));
              }}
            />
            <div className={`flex u-spbwx4 ${styles.cues}`}>
              {imgUrl && photoCount > 0 ? (
                <div className={`${styles.floatingLabel}`}>
                  <MdCameraAlt className={styles.iconSvg} />{" "}
                  <span>{photoCount}</span>
                </div>
              ) : null}
              {imgUrl && videoCount > 0 ? (
                <div className={`${styles.floatingLabel}`}>
                  <MdVideocam className={styles.iconSvg} />{" "}
                  <span>{videoCount}</span>
                </div>
              ) : null}
            </div>
          </figure>
        </Link>

        <div className={styles.cardBody}>
          <Link href={detailSlug} prefetch={false}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleContainer}>
                <Price
                  className={styles.cardTitle}
                  variant="h4"
                  priceUnit="PKR"
                  price={price}
                />
                <div className={`${styles.date} flex flex-ycenter u-spbwx4`}>
                  <MdAccessTime size="1.2em" />{" "}
                  <span>{`${getAddedAgoValue(createdAt)} ago`}</span>
                </div>
              </div>
              <div className="flex">
                <div className={styles.cardSubTitleContainer}>
                  <div className={styles.cardSubTitle}>{locName}</div>
                </div>
              </div>
            </div>
            <div className={styles.cardSpecs}>
              <div>
                {icons.landArea}
                {convertArea(area, province_id)}
              </div>
              {rooms > 0 ? (
                <div>
                  {icons.bedroom}
                  {rooms}
                </div>
              ) : null}

              {baths > 0 ? (
                <div>
                  {icons.bathroom}
                  {baths}
                </div>
              ) : null}
            </div>
            <div className={`${styles.filtersLabel} ${styles.textTruncate}`}>
              {title}
            </div>
            <div className={`${styles.des} ${styles.textTruncate}`}>
              {shortDescription}
            </div>
          </Link>
          <div className={`${styles.cardLabel} flex flex-between flex-ycenter`}>
            <Link href={detailSlug} prefetch={false}>
              <div className={styles.typePurpose}>
                <div className={styles.typePurpose}>{type_purpose_label}</div>
              </div>
            </Link>
            <div className={`${styles.btnList} inline-flex u-spbwx4`}>
              <Button
                disabled={!!deletedAd}
                className={styles.callBtn}
                variant="secondaryBtn"
                icon={<MdPhone />}
                onClick={() => {
                  sendLead(externalID, type, "phone");
                  let GAEvent = {
                    label: `${
                      data.purpose == "for-sale" ? "buy" : "rent"
                    } - search_listing_card - ${
                      isMobile ? "web-mobile" : "web"
                    }`,
                  };
                  const hash = `phone_view-${externalID}`;

                  fireGAEvent(
                    { ...GAEvent, category: "Lead", action: "phone_view" },
                    {
                      ...GAEvent,
                      category: "Unique Leads",
                      action: "phone_view_unique",
                    },
                    GAHash,
                    hash,
                    setGAHash
                  );

                  props.modal(
                    "CALL",
                    <ContactDetail
                      property_id={externalID}
                      purpose={data.purpose}
                      mobile={phoneNumber.mobile}
                      phone={phoneNumber.phone}
                      contactPerson={contactName}
                    />
                  );
                }}
              >
                Call
              </Button>
              <Button
                disabled={!!deletedAd}
                variant="secondaryGhostBtn"
                icon={<MdMail />}
                onClick={() => {
                  let GAEvent = {
                    label: `${
                      data.purpose == "for-sale" ? "buy" : "rent"
                    } - search_listing_card - ${
                      isMobile ? "web-mobile" : "web"
                    }`,
                  };
                  const hash = `email_view-${externalID}`;

                  fireGAEvent(
                    { ...GAEvent, category: "Lead", action: "email_view" },
                    {
                      ...GAEvent,
                      category: "Unique Leads",
                      action: "email_view_unique",
                    },
                    GAHash,
                    hash,
                    setGAHash
                  );

                  props.modal(
                    "EMAIL",
                    <div className={galleryForm}>
                      <Heading className="u-mb24" variant="h4">
                        Ask about the property
                      </Heading>
                      <InquiryForm
                        purpose={data.purpose}
                        GACallbackEvent={() => {
                          let GAEvent = {
                            label: `${
                              data.purpose == "for-sale" ? "buy" : "rent"
                            } - email_popup - ${
                              isMobile ? "web-mobile" : "web"
                            }`,
                          };
                          const hash = `email_lead-${externalID}`;

                          fireGAEvent(
                            {
                              ...GAEvent,
                              category: "Lead",
                              action: "email_lead",
                            },
                            {
                              ...GAEvent,
                              category: "Unique Leads",
                              action: "email_lead_unique",
                            },
                            GAHash,
                            hash,
                            setGAHash
                          );
                        }}
                        ea_alert_source={
                          isMobile
                            ? INQUIRY_MOBILE_SEARCH_LISTING_SOURCE
                            : INQUIRY_DESKTOP_SEARCH_LISTING_SOURCE
                        }
                        url={`${process.env.BASE_URL}${detailSlug}`}
                        propertyId={externalID}
                        onSuccess={handleInquirySuccess}
                      />
                    </div>
                  );
                }}
              >
                Email
              </Button>
              <Button
                disabled={!!deletedAd}
                className={styles.smsBtn}
                variant="secondaryGhostBtn"
                icon={<MdMail />}
                onClick={() => {
                  sendLead(externalID, type, "sms");

                  let GAEvent = {
                    label: `${
                      data.purpose == "for-sale" ? "buy" : "rent"
                    } - search_listing_card - ${
                      isMobile ? "web-mobile" : "web"
                    }`,
                  };
                  const hash = `sms_lead-${externalID}`;

                  fireGAEvent(
                    { ...GAEvent, category: "Lead", action: "sms_lead" },
                    {
                      ...GAEvent,
                      category: "Unique Leads",
                      action: "sms_lead_unique",
                    },
                    GAHash,
                    hash,
                    setGAHash
                  );
                }}
              >
                <span
                  href={`sms:${
                    phoneNumber.mobile
                  }&body=${`I would like to inquire about your property ${
                    !isServer() && window.location.href
                  }. Please contact me at your earliest convenience.`}`}
                >
                  SMS
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHorizontal;
