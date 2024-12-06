import { forwardRef, useEffect, useImperativeHandle, useRef, useState, useContext } from "react"
import { CITY_COOKIE_KEY, oddTypes, priceSliderRangesHash } from "../../utils/constants"
import { clearFilters } from "../../utils/filter-utlils"
import { convertAreaGeneral, filtersToUrl, getParamValue, getType } from "../../utils/utility"
import Button from "../common/button"
import Heading from "../common/heading"
import Sheet from "../common/sheet"
import PropertyTypeTab from "./property-type-tab"
import SearchInCity from "./search-in-city"
import AddKeywordFilter from "./add-keyword-filter"
import AreaRangeFilter from "./area-range-filter"
import BedFilter from "./beds-filter"
import CitySheet from "./city-sheet"
import LocationSelection from "./location-selection"
import PriceRangeFilter from "./price-range-filter"
import styles from "./mobile-filters.module.scss"
import { useCookies } from "react-cookie"
import { useHistory } from "react-router"
import { AreaContext } from "../../App"


const MobileFilters = forwardRef((props, ref) => {
  const { initialFilters = {}, setFiltersState, isMobile } = props

  const {
    price_min,
    price_max,
    area_min,
    area_max,
    city_id,
    purpose_id: initialPurpose = 1,
    type,
    beds_in,
    area,
    location_ids,
    keywords: keywordParams,
    child_locs,
  } = initialFilters

  const [citySheetState, setCitySheetState] = useState(false)
  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY])
  const [keywords, updateKeywords] = useState(keywordParams ? keywordParams.split(",") : [])
  const [purpose_id, updatePurpose] = useState(initialPurpose)
  const [selectedCity, selectCity] = useState(cookies[CITY_COOKIE_KEY] || { name: "Lahore", externalID: 1 })

  const [selectedType, selectType] = useState(type || getType(1))
  const [priceRange, setPriceRange] = useState({
    min: price_min || null,
    max: price_max || null,
  })

  const history = useHistory();
  const [areaRange, setAreaRange] = useState({
    min: (area_min && Math.round(convertAreaGeneral(area_min, "Square Feet", area.value || "Marla"))) || "",
    max: (area_max && Math.round(convertAreaGeneral(area_max, "Square Feet", area.value || "Marla"))) || "",
  })

  const [selectedChildLocs, selectChildLocs] = useState(child_locs || [])
  const [selectedBedFilters, updateBedroomFilter] = useState(!!beds_in ? beds_in.split(",") : [])

  const [selectedArea, selectArea] = useState(area || { short: "Marla", value: "Marla" })

  const priceRangeRef = useRef(null)
  const areaRangeRef = useRef(null)

  const [areaUnit, setAreaUnit] = useContext(AreaContext)

  useEffect(() => {
    if (areaUnit) {
      selectArea(areaUnit)
    }
  }, [areaUnit])

  useEffect(() => {
    if (child_locs) {
      selectChildLocs(child_locs)
    }
  }, [])

  const onClickRentBuyBtnRef = (id) => {
    priceRangeRef.current.setRange([priceSliderRangesHash[id].min, priceSliderRangesHash[id].max])
    setPriceRange({ min: "", max: "" })
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
    setFiltersState(false)
  }

  const onClickcitySheetState = (e) => {
    e.preventDefault()
    setCitySheetState(true)
  }

  useImperativeHandle(ref, () => ({
    selectCity,
    selectChildLocs,
  }))

  return (
    <>
      <form className={styles.form}>
        <div className="u-mb16 flex flexBetween">
          <strong className={styles.purposeLooking}>I am looking to</strong>
        </div>
        <div className={`${styles.purposeButton} u-mb24 u-spbwx8`}>
          <Button
            onClick={() => onClickRentBuyBtnRef(1)}
            variant={`${purpose_id == 1 ? "secondaryBtn" : "secondaryGhostBtn"}`}
            size="sm"
          >
            Buy
          </Button>
          <Button
            onClick={() => onClickRentBuyBtnRef(2)}
            variant={`${purpose_id == 2 ? "secondaryBtn" : "secondaryGhostBtn"}`}
            size="sm"
          >
            Rent
          </Button>
        </div>

        <div className="u-mb16">
          <SearchInCity onClickcitySheetState={onClickcitySheetState} selectedCityText={selectedCity.name} />
        </div>

        {citySheetState && (
          <Sheet
            className={styles.filterSheet}
            position="bottom"
            activeState={true}
            setSheetState={() => setCitySheetState(false)}
          >
            <CitySheet
              className={styles.filterSheet}
              selectedCity={selectedCity}
              selectCity={(city) => {
                selectCity(city)
                selectChildLocs([])
              }}
              position="top"
              setCitySheetState={setCitySheetState}
            />
          </Sheet>
        )}
        <LocationSelection
          className={`${styles.locationInput} u-mb32`}
          innerClassName={styles.locationDropDown}
          city={selectedCity}
          selected={selectedChildLocs}
          updateChildLocs={selectChildLocs}
          isMobile={isMobile}
        />
        <div className={`${styles.typeList} u-mb40`}>
          <Heading variant="h3" className={`${styles.filterHeading} u-mb16`}>
            Property Type
          </Heading>
          <PropertyTypeTab
            selectedType={selectedType}
            selectType={selectType}
            className={styles.slidePropertyType}
            isMobile
          />
        </div>
        <div className="u-mb40">
          <Heading variant="h3" className={`${styles.filterHeading} u-mb16`}>
            Price Range PKR
          </Heading>
          <PriceRangeFilter
            ref={priceRangeRef}
            isMobile
            purpose_id={purpose_id}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
        <div className="u-mb40">
          <AreaRangeFilter
            ref={areaRangeRef}
            search={search}
            areaRange={areaRange}
            area={area}
            setAreaRange={setAreaRange}
            selectedArea={selectedArea}
            selectArea={selectArea}
            isMobile
          />
        </div>
        <div className="u-mb40">
          <Heading variant="h3" className={`${styles.filterHeading} u-mb16`}>
            Keywords
          </Heading>
          <AddKeywordFilter isMobile keywords={keywords} updateKeywords={updateKeywords} />
        </div>
        {oddTypes.indexOf(selectedType.slug.toLowerCase()) == -1 ? (
          <div className="u-mb24">
            <>
              <Heading variant="h3" className={`${styles.filterHeading} u-mb16`}>
                Beds
              </Heading>
              <BedFilter isMobile selected={selectedBedFilters} updateBedroomFilter={updateBedroomFilter} />
            </>
          </div>
        ) : null}

        <div className={`${styles.formFixBtn} flex u-spbwx16`}>
          <Button
            variant="link"
            onClick={(e) => {
              e.preventDefault()
              clearFilters({
                updateKeywords,
                updatePurpose,
                selectCity,
                selectType,
                setPriceRange,
                setAreaRange,
                selectChildLocs,
                updateBedroomFilter,
                priceRangeRef,
                areaRangeRef,
                selectedArea,
              })
            }}
          >
            Clear All
          </Button>
          <Button onClick={search} className="flex-grow" variant="primaryBtn" size="lg">
            Search
          </Button>
        </div>
      </form>
    </>
  )
})

export default MobileFilters
