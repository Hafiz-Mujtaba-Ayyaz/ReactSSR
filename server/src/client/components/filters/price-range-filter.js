import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { priceSliderRangesHash, priceStepsMappingsBuy, priceStepsMappingsRent } from "../../utils/constants"
import { formatPrice } from "../../utils/utility"
import Button from "../common/button"
import DropdownMenu from "../common/dropdown-menu"
import btnStyles from "./filter-drop-down-button.module.scss"
import { tabContainer } from "./home-filters.module.scss"
import styles from "./price-range-filter.module.scss"
import RangeSlider from "../common/range-slider"

const PriceRangeData = (props) => {
  const { priceRange, setRange, className = "", purpose_id, purposeStepHash } = props
  const getPriceStepValue = (value) => Object.keys(purposeStepHash).filter((key) => purposeStepHash[key] == value)[0]

  return (
    <>
      <div className="flex u-mb16 u-spbwx32">
        <div className={`${styles.rangeInput}`}>
          <span className="flex u-mb4">Min</span>
          <input
            type="number"
            className={styles.filterInput}
            name="min_price"
            value={priceRange.min == null ? 0 : priceRange.min}
            onChange={(e) => {
              setRange([e.target.value, priceRange.max])
            }}
          />
        </div>
        <div className={`${styles.rangeInput}`}>
          <span className={`${styles.textRight} ${styles.label} u-mb4`}>Max</span>
          <input
            type="text"
            className={`${styles.filterInput} ${styles.textRight}`}
            name="max_price"
            value={priceRange.max == null ? "any" : priceRange.max}
            onChange={(e) => {
              const { value } = e.target
              if (!isNaN(value.slice(-1))) {
                setRange([priceRange.min, value])
              } else {
                setRange([priceRange.min, value.slice(0, -1)])
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                if (isNaN(e.target.value)) {
                  setRange([priceRange.min, ""])
                }
              }
            }}
          />
        </div>
      </div>

      <div className={`${className} u-mb32`}>
        <RangeSlider
          min={priceSliderRangesHash[purpose_id].min}
          max={priceSliderRangesHash[purpose_id].max}
          step={null}
          marks={priceSliderRangesHash[purpose_id].marks}
          allowCross={false}
          value={[
            priceRange.min ? getPriceStepValue(priceRange.min) : 0,
            priceRange.max
              ? getPriceStepValue(priceRange.max) || +priceRange.max
              : priceSliderRangesHash[purpose_id].max,
          ]}
          defaultValue={[priceSliderRangesHash[purpose_id].min, priceSliderRangesHash[purpose_id].max]}
          onChange={(values) => {
            setRange(values)
          }}
          allowCross
        />
      </div>
    </>
  )
}

const PriceRangeFilter = forwardRef((props, ref) => {
  const { priceRange, setPriceRange, isMobile, purpose_id, search: searchCallback, src } = props

  const purposeStepHash = purpose_id == 1 ? priceStepsMappingsBuy : priceStepsMappingsRent

  const dropdownRef = useRef()
  const [clear, setClear] = useState(false)

  const getLableMin = (value) => (value == 0 ? "any" : value)
  const getLableMax = (value, purpose_id) =>
    value == null || value == 0 || value == priceSliderRangesHash[purpose_id].max ? "any" : value > 0 ? value : "any"

  const setRange = (value) => {
    const newMinValue = purposeStepHash[value[0]] || value[0]
    let max = value[1] < 0 ? "" : value[1]
    let newMaxValue = purposeStepHash[max] || max
    if (newMaxValue === 0 || newMaxValue === priceSliderRangesHash[purpose_id].max) {
      newMaxValue = null
    }
    setPriceRange({ min: newMinValue, max: newMaxValue })
  }

  useImperativeHandle(ref, () => ({
    setRange,
  }))

  const getPriceLabel = (priceRange) => {
    let labelMin = getLableMin(priceRange.min || 0)
    labelMin = labelMin != "any" ? formatPrice(labelMin) : labelMin

    let labelMax = getLableMax(priceRange.max || priceSliderRangesHash[purpose_id].max, purpose_id)
    labelMax = labelMax != "any" ? formatPrice(labelMax) : labelMax

    let label = `${labelMin} - ${labelMax}`

    if (label == "any - any") {
      label = "Select Price"
    }

    return label
  }

  const swapRange = () => {
    let newRange = { ...priceRange }

    if (priceRange.min > parseInt(priceRange.max)) {
      newRange = { min: priceRange.max, max: parseInt(priceRange.min) }
      setPriceRange(newRange)
    }
    return newRange
  }

  const search = () => {
    swapRange()
    searchCallback()
  }

  useEffect(() => {
    if (clear) {
      search()
      setClear(false)
    }
  }, [clear])

  const label = getPriceLabel(priceRange)

  return (
    <>
      {!isMobile ? (
        <DropdownMenu ref={dropdownRef} buttonText={label}>
          <div className={tabContainer}>
            <PriceRangeData
              priceRange={priceRange}
              purposeStepHash={purposeStepHash}
              priceRange={priceRange}
              setRange={setRange}
              purpose_id={purpose_id}
              className={props.className}
            />
            <div className={`${btnStyles.btnList} flex u-spbwx16`}>
              <span
                onClick={() => {
                  setPriceRange([0, null])
                  if (src != "home") {
                    setClear(true)
                  }
                  dropdownRef.current.setIsActive(false)
                }}
                className={styles.close}
              >
                Clear
              </span>
              {src != "home" ? (
                <Button
                  onClick={() => {
                    search()
                    dropdownRef.current.setIsActive(false)
                  }}
                  variant="primaryBtn"
                  size="sm"
                >
                  Search
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    dropdownRef.current.setIsActive(false)
                  }}
                  variant="primaryBtn"
                  size="sm"
                >
                  Done
                </Button>
              )}
            </div>
          </div>
        </DropdownMenu>
      ) : (
        <PriceRangeData
          purposeStepHash={purposeStepHash}
          priceRange={priceRange}
          purpose_id={purpose_id}
          setRange={setRange}
          className={props.className}
        />
      )}
    </>
  )
})
export default PriceRangeFilter
