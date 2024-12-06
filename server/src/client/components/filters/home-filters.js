import { useState, useContext, useEffect } from "react"
import { useCookies } from "react-cookie"
import { MdKeyboardArrowDown } from "react-icons/md"
import { AREA_COOKIE_KEY, CITY_COOKIE_KEY, oddTypes, rentSlug } from "../../utils/constants"
import { filtersToUrl, getType } from "../../utils/utility"
import LocationSelection from "./location-selection"
import PriceRangeFilter from "./price-range-filter"
import PropertyTypeTab from "./property-type-tab"
import AreaRangeFilter from "./area-range-filter"
import BedFilter from "./beds-filter"
import Button from "../common/button"
import CitySelectionDropdown from "./city-selection-dropdown"
import styles from "./home-filters.module.scss"
// import { AreaContext } from "../../pages/app"
import { useHistory } from "react-router-dom";
import { AreaContext } from "../../App"


const HomeFilters = ({ className = "", showMoreFilter = true, switchPurpose = false, ...props }) => {
  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY, AREA_COOKIE_KEY])

  const [purpose_id, updatePurpose] = useState(props.purpose == rentSlug ? 1 : 2)
  const [selectedCity, selectCity] = useState("")
  const [selectedChildLocs, selectChildLocs] = useState([])
  const [selectedType, selectType] = useState(getType(1))
  const [priceRange, setPriceRange] = useState({ min: null, max: null })
  const [areaRange, setAreaRange] = useState({ min: "", max: "" })
  const [moreFilters, setMoreFilters] = useState(false)
  const history = useHistory()

  const [selectedArea, selectArea] = useState(
    cookies[AREA_COOKIE_KEY] && cookies[AREA_COOKIE_KEY].short
      ? cookies[AREA_COOKIE_KEY]
      : { short: "Marla", value: "Marla" }
  )

  const [areaUnit, setAreaUnit] = useContext(AreaContext)

  useEffect(() => {
    selectCity(cookies[CITY_COOKIE_KEY] || { name: "Lahore", externalID: 1 })
  }, [cookies[CITY_COOKIE_KEY]])

  useEffect(() => {
    if (areaUnit) {
      selectArea(areaUnit)
    }
  }, [areaUnit])

  const [selectedBedFilters, updateBedroomFilter] = useState("")


  const search = () => {
    let url = filtersToUrl({
      selectedCity,
      selectedType,
      purpose_id,
      priceRange,
      areaRange,
      selectedBedFilters,
      selectedChildLocs,
    })
    console.log("vivzzz");
    history.push(`/search${url}`)
  }

  const openMoreFilters = () => {
    setMoreFilters(true)
  }
  return (
    <div className={`${className} ${styles.homeFilters} u-mb48`.trim()}>
      <div className={`${styles.purposeButton} u-mb24`}>
        <Button
          className={`${styles.buyBtn} ${purpose_id == 1 ? styles.selected : ""}`}
          onClick={() => {
            if (switchPurpose) {
              updatePurpose(1)
            } else {
              history.push("/")
            }
          }}
        >
          Buy
        </Button>
        <Button
          className={`${styles.rentBtn} ${purpose_id == 2 ? styles.selected : ""}`}
          onClick={() => {
            if (switchPurpose) {
              updatePurpose(2)
            } else {
              history.push("/rent.html")
            }
          }}
        >
          Rent
        </Button>
      </div>
      <div className="flex flex-ycenter u-mb8 u-spbwx8">
        <div className={`${styles.dropdownFilter} ${styles.cityDropDownFilter}`} onClick={openMoreFilters}>
          <CitySelectionDropdown
            selectedCity={selectedCity}
            selectCity={(item) => {
              selectCity(item)
              selectChildLocs([])
              setCookie(CITY_COOKIE_KEY, item, {
                path: "/",
                maxAge: 3600 * 24 * 7,
                sameSite: true,
              })
            }}
          />
        </div>
        <div className={styles.locationFieldOuter} onClick={openMoreFilters}>
          <LocationSelection
            className={styles.locationField}
            innerClassName={styles.locationChipList}
            city={selectedCity}
            selected={selectedChildLocs}
            updateChildLocs={selectChildLocs}
            isMobile={props.isMobile}
          />
        </div>
        <Button className={styles.searchBtn} variant="primaryBtn" size="lg" onClick={() => search()}>
          Search
        </Button>
      </div>

      <div
        className={`${styles.moreFiltersList} ${
          moreFilters ? "flex" : showMoreFilter ? styles.hideOthersFilters : ""
        } ${
          oddTypes.indexOf(selectedType.slug.toLowerCase()) == -1 ? "" : styles.hideBedsFilter
        } flex-ycenter u-spbwx8`}
      >
        <div className={`${styles.dropdownFilter} ${styles.purposeDropDown}`}>
          <PropertyTypeTab selectedType={selectedType} selectType={selectType} />
        </div>

        <div className={`${styles.dropdownFilter} ${styles.priceDropDown}`}>
          <PriceRangeFilter
            src="home"
            search={search}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            purpose_id={purpose_id}
          />
        </div>

        <div className={`${styles.dropdownFilter} ${styles.areaDropDown}`}>
          <AreaRangeFilter
            selectedArea={selectedArea}
            selectArea={selectArea}
            search={search}
            src="home"
            areaRange={areaRange}
            setAreaRange={setAreaRange}
            area={cookies[AREA_COOKIE_KEY]}
          />
        </div>

        {oddTypes.indexOf(selectedType.slug.toLowerCase()) == -1 ? (
          <div className={`${styles.dropdownFilter} ${styles.bedsDropDown}`}>
            <BedFilter
              src="home"
              search={search}
              selected={selectedBedFilters}
              updateBedroomFilter={updateBedroomFilter}
            />
          </div>
        ) : null}
      </div>
      {showMoreFilter ? (
        <button
          onClick={openMoreFilters}
          className={`${styles.moreFilters} ${moreFilters && styles.hideButton} flex flexYcenter flexXcenter`}
        >
          More Filters <MdKeyboardArrowDown />
        </button>
      ) : null}
    </div>
  )
}

export default HomeFilters
