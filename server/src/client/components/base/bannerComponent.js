import { useState, useEffect } from "react"
import HomeFilters from "../filters/home-filters"
import MobileSearchBar from "../filters/mobile-search-bar"
import { homeSearch } from "../filters/home-filters.module.scss"

const BannerComponent = (props) => {
  const { purpose, isMobile } = props
  const [isHandheldDevice, setIsHandheldDevice] = useState(false)

  const isNarrow = () => {
    return window.matchMedia("(max-width: 768px)").matches
  }

  const handleResize = () => {
    if (isNarrow()) {
      return setIsHandheldDevice(true)
    }
    return setIsHandheldDevice(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isHandheldDevice])

  return isHandheldDevice || isMobile ? (
    <>
      <MobileSearchBar className={homeSearch} homePageCityPanel isMobile={isMobile} />
    </>
  ) : (
    <HomeFilters purpose={purpose} />
  )
}

export default BannerComponent
