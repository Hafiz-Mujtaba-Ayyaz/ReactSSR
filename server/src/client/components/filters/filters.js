import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react"
import { useCookies } from "react-cookie"
import { CITY_COOKIE_KEY, oddTypes, priceSliderRangesHash } from "../../utils/constants"
import { clearFilters, getCityFromId } from "../../utils/filter-utlils"
import { convertAreaGeneral, filtersToUrl, fireGAEvent, getAreaFromCookies, getParamValue } from "../../utils/utility"
import CitySelectionDropdown from "./city-selection-dropdown"
import Button from "../common/button"
import Container from "../base/container"
import DropdownMenu from "../common/dropdown-menu"
import LocationSelection from "./location-selection"
import PriceRangeFilter from "./price-range-filter"
import PropertyTypeTab from "./property-type-tab"
import AddKeywordFilter from "./add-keyword-filter"
import AreaRangeFilter from "./area-range-filter"
import BedFilter from "./beds-filter"
import styles from "./filters.module.scss"
import { locationChipList, locationField } from "./home-filters.module.scss"
import { AreaContext } from "../../pages/_app"

const Filters = ({ className = "", initialFilters }) => {
  const {
    price_min,
    price_max,
    area_min,
    area_max,
    city_id,
    purpose_id: initialPurpose,
    type,
    beds_in,
    area,
    location_ids,
    keywords: keywordParams,
    child_locs,
  } = initialFilters

  const [purpose_id, updatePurpose] = useState(initialPurpose)
  const [keywords, updateKeywords] = useState(keywordParams ? keywordParams.split(",") : [])
  const [selectedCity, selectCity] = useState(getCityFromId(city_id) || {})
  const [selectedType, selectType] = useState(type)
  const [priceRange, setPriceRange] = useState({
    min: price_min && !isNaN(price_min) ? price_min : null,
    max: price_max && !isNaN(price_max) ? price_max : null,
  })

  const history = useHistory()

  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY])

  const [selectedArea, selectArea] = useState(area)

  const [areaRange, setAreaRange] = useState({
    min: (area_min && Math.round(convertAreaGeneral(area_min, "Square Feet", area.value || "Marla"))) || "",
    max: (area_max && Math.round(convertAreaGeneral(area_max, "Square Feet", area.value || "Marla"))) || "",
  })

  const [selectedChildLocs, selectChildLocs] = useState(child_locs || [])

  const [selectedBedFilters, updateBedroomFilter] = useState(!!beds_in ? beds_in.split(",") : [])

  const [areaUnit, setAreaUnit] = useContext(AreaContext)

  useEffect(() => {
    if (areaUnit) {
      areaRangeRef.current.clearFilter("home")
      selectArea(areaUnit)
    }
  }, [areaUnit])

  useEffect(() => {
    if (child_locs) {
      selectChildLocs(child_locs)
    }
  }, [child_locs])

  const dropdownRef = useRef(null)
  const priceRangeRef = useRef(null)
  const areaRangeRef = useRef(null)

  const onClickRentBuyBtnRef = (id) => {
    dropdownRef.current.setIsActive(false)
    priceRangeRef.current.setRange([priceSliderRangesHash[id].min, priceSliderRangesHash[id].max])
    setPriceRange({ min: null, max: null })
    updatePurpose(id)
  }

  const search = () => {
    let sort = getParamValue("sort", window.location.href)
    let url = filtersToUrl({
      keywords,
      selectedCity,
      selectedType,
      purpose_id,
      priceRange,
      areaRange,
      selectedBedFilters,
      selectedChildLocs,
      sort,
    })

    history.push(`/search${url}`)
  }

  return (
    <div className={`${className} ${styles.filters}`.trim()}>
      <Container>
        <div className="flex flex-ycenter u-mb8 u-spbwx8">
          <DropdownMenu ref={dropdownRef} buttonText={purpose_id == 1 ? "Buy" : "Rent"} triggerStyle="button">
            <div className={`${styles.purposeList} u-spbwx8`}>
              <Button className={purpose_id == 1 ? styles.selected : ""} onClick={() => onClickRentBuyBtnRef(1)}>
                Buy
              </Button>
              <Button className={purpose_id == 2 ? styles.selected : ""} onClick={() => onClickRentBuyBtnRef(2)}>
                Rent
              </Button>
            </div>
          </DropdownMenu>

          <CitySelectionDropdown
            selectedCity={selectedCity}
            selectCity={(city) => {
              selectCity(city)
              selectChildLocs([])
              setCookie(CITY_COOKIE_KEY, city, {
                path: "/",
                maxAge: 3600 * 24 * 7,
                sameSite: true,
              })
            }}
          />

          <div className={styles.locationFieldOuter}>
            <LocationSelection
              className={locationField}
              innerClassName={locationChipList}
              city={selectedCity}
              selected={selectedChildLocs}
              updateChildLocs={selectChildLocs}
            />
          </div>

          <Button className={styles.searchBtn} variant="primaryBtn" onClick={search}>
            Search
          </Button>
        </div>

        <div className={`flex flex-ycenter u-spbwx8 ${styles.subfilters}`.trim()}>
          <PropertyTypeTab selectedType={selectedType} selectType={selectType} />

          <PriceRangeFilter
            ref={priceRangeRef}
            search={search}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            purpose_id={purpose_id}
          />

          <AreaRangeFilter
            ref={areaRangeRef}
            search={search}
            areaRange={areaRange}
            setAreaRange={setAreaRange}
            area={area}
            selectedArea={selectedArea}
            selectArea={selectArea}
          />

          <AddKeywordFilter search={search} keywords={keywords} updateKeywords={updateKeywords} />

          {oddTypes.indexOf(selectedType.slug.toLowerCase()) == -1 ? (
            <BedFilter search={search} selected={selectedBedFilters} updateBedroomFilter={updateBedroomFilter} />
          ) : null}

          <span
            className={styles.clearAll}
            onClick={() =>
              clearFilters({
                updatePurpose,
                selectCity,
                selectType,
                setPriceRange,
                setAreaRange,
                selectChildLocs,
                updateBedroomFilter,
                updateKeywords,
                priceRangeRef,
                selectedArea,
                areaRangeRef,
              })
            }
          >
            Clear All
          </span>
        </div>
      </Container>
    </div>
  )
}

export default Filters
