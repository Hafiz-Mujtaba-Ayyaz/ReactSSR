import { useRef, useState } from "react"
import { useCookies } from "react-cookie"
import { MdSearch } from "react-icons/md"
import { CITY_COOKIE_KEY } from "../../utils/constants"
import CitySheet from "./city-sheet"
import MobileFilters from "./mobile-filters"
import styles from "./mobile-search-bar.module.scss"
import SearchInCity from "./search-in-city"
import Sheet from "../common/sheet"

const MobileSearchBar = (props) => {
  const { homePageCityPanel, className, initialFilters } = props
  const fullWidth = homePageCityPanel === false ? "breakout" : ""
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY])

  const [citySheetState, setCitySheetState] = useState(false)
  const [selectedCity, selectCity] = useState(cookies[CITY_COOKIE_KEY] || { name: "Lahore", externalID: 1 })

  const toggleSheet = () => {
    setIsFilterOpen(!isFilterOpen)
  }
  const triggerFilter = () => {
    setIsFilterOpen(true)
  }
  const filtersRef = useRef(null)

  return (
    <>
      {citySheetState && (
        <Sheet
          className={styles.filterSheet}
          position="bottom"
          activeState={true}
          setSheetState={() => setCitySheetState(false)}
          className={styles.citySheetScroll}
        >
          <CitySheet
            className={styles.filterSheet}
            selectedCity={selectedCity}
            selectCity={(city) => {
              selectCity(city)
              setCookie(CITY_COOKIE_KEY, city, {
                path: "/",
                maxAge: 3600 * 24 * 7,
                sameSite: true,
              })
              filtersRef?.current?.selectCity(city)
              filtersRef?.current?.selectChildLocs([])
            }}
            position="top"
            setCitySheetState={setCitySheetState}
          />
        </Sheet>
      )}
      {homePageCityPanel ? (
        <SearchInCity
          onClickcitySheetState={() => setCitySheetState(true)}
          selectedCityText={selectedCity.name}
          className={styles.homeSearchBar}
        />
      ) : null}

      <button className={`${className} ${styles.searchBar} ${fullWidth} u-mb24 flex`} onClick={triggerFilter}>
        <div className={`${styles.inputBar} flex flexYcenter`}>
          Search...
          <MdSearch />
        </div>
      </button>
      {isFilterOpen && (
        <>
          <Sheet
            className={styles.filterSheet}
            position="bottom"
            activeState={isFilterOpen}
            setSheetState={setIsFilterOpen}
          >
            <MobileFilters
              ref={filtersRef}
              setFiltersState={setIsFilterOpen}
              initialFilters={initialFilters}
              isMobile
            />
          </Sheet>
        </>
      )}
    </>
  )
}

export default MobileSearchBar
