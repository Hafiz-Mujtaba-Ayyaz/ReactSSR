import React from "react";
import { useState } from "react"
import SwiperCore, { Navigation, Pagination, Thumbs, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Thumbs, Navigation, Pagination, Keyboard])

const sliderDefaultSetting = {
  freeMode: true,
  freeModeSticky: true,
  freeModeMinimumVelocity: 0.5,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "row",
  navigation: true,
  slidesPerView: 4,
  slidesPerView: 1.5,
  spaceBetween: 15,

  // when window width is the following breakpoints
  breakpoints: {
    888: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    640: {
      slidesPerView: 3.2,
      slidesPerGroup: 3,
    },
    480: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      navigation: false,
    },
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      navigation: false,
    },
  },
}

const sliderThumbsSettings = {
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
}

const SwiperSlider = ({
  className = "",
  thumbClassName = "",
  children,
  silderType = "",
  sliderOptions = {},
  customThumbsSetting = "",
  ...props
}) => {
  // Simple Slider Setting
  const sliderSettings = { ...sliderDefaultSetting, ...sliderOptions }

  // Store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const thumbSliderSettings = { ...sliderThumbsSettings, ...customThumbsSetting }

  return (
    <>
      {silderType === "thumbSlider" ? (
        <>
          <Swiper
            freeMode={true}
            className={className}
            thumbs={{ swiper: thumbsSwiper }}
            {...sliderSettings}
            {...props}
          >
            {children.map((child, i) => {
              return <SwiperSlide key={i}>{child}</SwiperSlide>
            })}
          </Swiper>
          <Swiper freeMode={true} className={thumbClassName} onSwiper={setThumbsSwiper} {...thumbSliderSettings}>
            {children.map((child, i) => {
              return <SwiperSlide key={i}>{child}</SwiperSlide>
            })}
          </Swiper>
        </>
      ) : (
        <Swiper freeMode={true} className={className} {...sliderSettings} {...props}>
          {children.map((child, i) => {
            return <SwiperSlide key={i}>{child}</SwiperSlide>
          })}
        </Swiper>
      )}
    </>
  )
}

export default SwiperSlider
