import { useRef } from "react"
import { HiSortDescending } from "react-icons/hi"
import { sortingList } from "../../utils/constants"
import { addParamToUrl, removeParamsFromUrl } from "../../utils/utility"
import DropdownMenu from "../common/dropdown-menu"
import * as styles from "./sorting-dropdown.module.scss"
import { useHistory } from "react-router"

const SortingDropDown = (props) => {
  const { sort, setSortingValue } = props
  const dropdownRef = useRef()
  const history = useHistory()

  const selectSortValue = (item) => {
    setSortingValue(item.value)
    if (item.sort_key !== "default") {
      history.push(addParamToUrl(window.location.href, item.sort_key, "sort"))
    } else {
      history.push(removeParamsFromUrl("sort", window.location.href))
    }
    dropdownRef.current.setIsActive(false)
  }

  const sortingDropDownBtn = (
    <div className="flex flex-ycenter u-spbwx4">
      <HiSortDescending size="1.2em" />
      <strong>{sort}</strong>
    </div>
  )

  return (
    <>
      <DropdownMenu
        ref={dropdownRef}
        className={styles.sorting}
        triggerClassName={styles.btnTransparent}
        buttonText={sortingDropDownBtn}
        triggerStyle="button"
        isMenu
        menuPlacement="right"
      >
        {sortingList.map((item) => (
          <button
            className={`${styles.sortingItem} ${sort === item.value ? styles.selected : ""}`.trim()}
            key={item.sort_key}
            onClick={() => selectSortValue(item)}
          >
            {item.value}
          </button>
        ))}
      </DropdownMenu>
    </>
  )
}

export default SortingDropDown
