import { useEffect, useState } from "react"
import { RECENT_SEARCHES_KEY } from "../../utils/constants"
import Card from "../common/card"
import Heading from "../common/heading"
import SwiperSlider from "../common/swiper-slider"
import { MdArrowBack, MdArrowForward } from "react-icons/md"

const sliderSettings = {
  freeMode: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: "#recent-search-button-next",
    prevEl: "#recent-search-button-prev",
  },
  breakpoints: {
    887: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    640: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1.5,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
    },
  },
}

const RecentSearches = ({ className = "", headingSize = "" }) => {
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    if (typeof localStorage != "undefined") {
      let searchResults = (localStorage.getItem(RECENT_SEARCHES_KEY)) || "[]"
      searchResults = JSON.parse(searchResults)
      //delete prev recent search type for
      let filtered = []
      if (searchResults && searchResults.length > 0) {
        filtered = searchResults.filter((item) => {
          return typeof item != "string" && item != null
        })
        if (filtered.length != searchResults.length) {
          localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(filtered))
        }
        searchResults = filtered
        setSearchList(searchResults)
      }
    }
  }, [])

  let searchResults = searchList?.map((item) => {
    if (item) {
      return <Card data={item.label} key={item.slug} />
    }
    return null
  })

  return searchList && searchList.length > 0 ? (
    <>
      <Heading className={headingSize} variant="h3">
        {"Recent Searches"}
      </Heading>
      <div className={className}>
        <div id="recent-search-button-prev" class="swiper-button-prev swiper-navigation-button">
          <MdArrowBack class="icon" />
        </div>
        <div id="recent-search-button-next" class="swiper-button-next swiper-navigation-button">
          <MdArrowForward class="icon" />
        </div>
        <SwiperSlider sliderOptions={sliderSettings}>{searchResults}</SwiperSlider>
      </div>
    </>
  ) : null
}

export default RecentSearches
