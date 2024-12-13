import React from "react";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { TiArrowSortedDown } from "react-icons/ti"
import { areaRangeHash } from "../../utils/constants"
import { formatPrice, getAreaLabel } from "../../utils/utility"
import AreaList from "../common/area-list-popup"
import Button from "../common/button"
import DropdownMenu from "../common/dropdown-menu"
import RangeSlider from "../common/range-slider"
import * as styles from "./area-range-filter.module.scss"
import * as btnStyles from "./filter-drop-down-button.module.scss"
import { tabContainer } from "./filters.module.scss"
import { filterInput, label, rangeInput, textRight } from "./price-range-filter.module.scss"
import Modal from "../common/react-modal"

const AreaRangeData = (props) => {
  const {
    minValue,
    maxValue,
    setRange,
    className = "",
    setMinValue,
    setMaxValue,
    setModalState,
    displayModel,
    clearFilter,
    selectArea,
    selectedArea,
  } = props
  const resetRange = (value, newArea) => {
    setMinValue(value[0])
    value[1] < areaRangeHash[newArea.value].max ? setMaxValue(value[1]) : setMaxValue(areaRangeHash[newArea.value].max)
  }

  return (
    <>
      <div className={`${styles.areaLabel} u-mb16`}>
        <span className={styles.label} id="search-area-title">
          {" "}
          Area Unit:{" "}
        </span>
        <span className={styles.labelLink}>
          <button
            className={`${styles.areaText} inlineFlex flexYcenter`}
            onClick={(e) => {
              e.preventDefault()
              setModalState(true)
            }}
          >
            {selectedArea.short} <TiArrowSortedDown />
          </button>
        </span>
      </div>
      <Modal showModal={displayModel} onClickClose={() => setModalState(false)}>
        <AreaList
          selectedArea={selectedArea}
          selectArea={(item) => {
            selectArea(item)
            clearFilter("reset")
            resetRange([0, areaRangeHash[item.value].max], item)
          }}
          setModalState={setModalState}
        />
      </Modal>
      <div className="flex u-mb16 u-spbwx32">
        <div className={`${rangeInput}`}>
          <span className="flex u-mb4">Min</span>
          <input
            type="number"
            className={filterInput}
            name="min_price"
            value={minValue}
            onChange={(e) => {
              setMinValue(e.target.value)
              setRange([e.target.value, maxValue])
            }}
          />
        </div>

        <div className={rangeInput}>
          <span className={`${textRight} ${label} u-mb4`}>Max</span>
          <input
            type="number"
            className={`${filterInput} ${textRight}`}
            name="min_price"
            value={maxValue}
            onChange={(e) => {
              setMaxValue(e.target.value)
              setRange([minValue, e.target.value], true)
            }}
          />
        </div>
      </div>
      <div className={`${className} u-mb32`}>
        <RangeSlider
          min={areaRangeHash[selectedArea.value].min}
          max={areaRangeHash[selectedArea.value].max}
          step={null}
          marks={areaRangeHash[selectedArea.value].marks}
          allowCross={false}
          value={[minValue, maxValue]}
          defaultValue={[areaRangeHash[selectedArea.value].min, areaRangeHash[selectedArea.value].max]}
          onChange={(value) => {
            setRange(value)
          }}
        />
      </div>
    </>
  )
}

const AreaRangeFilter = forwardRef((props, ref) => {
  const { areaRange, setAreaRange, isMobile, search, selectArea, selectedArea, src } = props

  const [minValue, setMinValue] = useState(areaRange?.min ? areaRange.min : areaRangeHash[selectedArea.value].min)
  const [maxValue, setMaxValue] = useState(areaRange?.max ? areaRange.max : areaRangeHash[selectedArea.value].max)
  const [clear, setClear] = useState(false)
  const dropdownRef = useRef()

  const getLableMax = (value) => (value == areaRangeHash[selectedArea.value].max ? "any" : formatPrice(value))
  const setRange = (value, ignoreMax = false) => {
    setMinValue(value[0])
    let min = value[0] == areaRangeHash[selectedArea.value].min ? "" : value[0]
    let max = getLableMax(value[1]) == "any" ? "" : value[1]
    if (!ignoreMax) {
      value[1] < areaRangeHash[selectedArea.value].max
        ? setMaxValue(value[1])
        : setMaxValue(areaRangeHash[selectedArea.value].max)
    }
    setAreaRange({ min, max })
  }

  // useEffect(() => {
  //   clearFilter("home")
  // }, [selectedArea])

  useEffect(() => {
    if (clear) {
      search()
      setClear(false)
    }
  }, [clear])

  const [displayModel, setModalState] = useState(false)

  const clearFilter = (src) => {
    setRange([areaRangeHash[selectedArea.value].min, areaRangeHash[selectedArea.value].max])
    if (src != "home" && src != "reset") {
      setClear(true)
    }
    dropdownRef.current?.setIsActive(false)
  }

  useImperativeHandle(ref, () => ({
    clearFilter,
    setRange,
  }))

  return (
    <>
      {!isMobile ? (
        <DropdownMenu
          ref={dropdownRef}
          buttonText={`${getAreaLabel(areaRange)}${areaRange.min || areaRange.max ? ` ${selectedArea.short}` : ""}`}
        >
          <div className={tabContainer}>
            <AreaRangeData
              minValue={minValue}
              maxValue={maxValue}
              setAreaRange={setAreaRange}
              search={search}
              getLableMax={getLableMax}
              setRange={setRange}
              className={props.className}
              displayModel={displayModel}
              setMinValue={setMinValue}
              setMaxValue={setMaxValue}
              setModalState={setModalState}
              selectArea={selectArea}
              clearFilter={clearFilter}
              selectedArea={selectedArea}
            />
            <div className={`${btnStyles.btnList} flex u-spbwx16`}>
              <span onClick={() => clearFilter(src)} className={styles.close}>
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
        <AreaRangeData
          minValue={minValue}
          maxValue={maxValue}
          clearFilter={clearFilter}
          setAreaRange={setAreaRange}
          search={search}
          getLableMax={getLableMax}
          setRange={setRange}
          className={props.className}
          displayModel={displayModel}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
          setModalState={setModalState}
          selectArea={selectArea}
          selectedArea={selectedArea}
        />
      )}
    </>
  )
})

export default AreaRangeFilter
