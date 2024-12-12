import { useEffect, useRef, useState } from "react"
import { BEDS_FILTER_DATA } from "../../utils/constants"
import { getBedsString } from "../../utils/utility"
import * as styles from "./beds-filter.module.scss"
import Button from "../common/button"
import DropdownMenu from "../common/dropdown-menu"
import * as btnStyles from "./filter-drop-down-button.module.scss"

const BedroomFilters = (props) => {
  const { selected, updateBedroomFilter } = props

  return (
    <div className={`${styles.beds} flex u-mb24 u-spbwx8`}>
      {BEDS_FILTER_DATA.map((item, index) => (
        <div
          className={`${styles.bedItem} ${selected?.indexOf(item.slug) != -1 ? styles.selected : ""}`}
          key={item.slug}
          onClick={() => {
            let copy = [...selected]
            if (selected.indexOf(item.slug) == -1) {
              copy.push(item.slug)
              updateBedroomFilter(copy)
            } else {
              copy.splice(selected.indexOf(item.slug), 1)
              updateBedroomFilter(copy)
            }
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}

const BedFilter = (props) => {
  const { selected = [], updateBedroomFilter, isMobile, search, src } = props

  const dropdownRef = useRef()
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if (clear) {
      search()
      setClear(false)
    }
  }, [clear])

  return (
    <>
      {isMobile ? (
        <BedroomFilters selected={selected} updateBedroomFilter={updateBedroomFilter} />
      ) : (
        <DropdownMenu
          className={styles.bedContainer}
          ref={dropdownRef}
          buttonText={selected?.length > 0 ? getBedsString(selected, BEDS_FILTER_DATA) + " Beds" : "Beds"}
          styleDropdownMenu={{ width: 350 }}
        >
          <BedroomFilters selected={selected} updateBedroomFilter={updateBedroomFilter} />
          <div className={`${btnStyles.btnList} flex u-spbwx16`}>
            <span
              onClick={() => {
                updateBedroomFilter([])
                if (src != "home") {
                  setClear(true)
                }
                dropdownRef.current.setIsActive(false)
              }}
              className={styles.close}
            >
              Clear
            </span>
            <Button
              variant="primaryBtn"
              size="sm"
              onClick={() => {
                if (src !== "home") {
                  search()
                }
                dropdownRef.current.setIsActive(false)
              }}
            >
              {src === "home" ? "Done" : "Search1"}
            </Button>
          </div>
        </DropdownMenu>
      )}
    </>
  )
}

export default BedFilter
