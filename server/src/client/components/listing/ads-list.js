import React from "react";
import CardVertical from "../common/card-vertical"
import Heading from "../common/heading"
import SwiperSlider from "../common/swiper-slider"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { recentSearches } from "../home/home-screen.module.scss"

const sliderSettings = {
  navigation: {
    nextEl: "#recent-viewed-button-next",
    prevEl: "#recent-viewed-button-prev",
  },
}

const AdsList = ({ className = "", title, listData, headingVariant = "h3", callToAction, onSuccess }) => {
  return (
    <>
      {title && <Heading variant={headingVariant}>{title}</Heading>}
      <div className={recentSearches}>
        <div id="recent-viewed-button-prev" class="swiper-button-prev swiper-navigation-button">
          <MdArrowBack class="icon" />
        </div>
        <div id="recent-viewed-button-next" class="swiper-button-next swiper-navigation-button">
          <MdArrowForward class="icon" />
        </div>
        <SwiperSlider className={className} sliderOptions={sliderSettings}>
          {listData.map((ad, i) => {
            return <CardVertical data={ad} key={ad.externalID} callToAction={callToAction} onSuccess={onSuccess} />
          })}
        </SwiperSlider>
      </div>
    </>
  )
}

export default AdsList
