import * as styles from "./search-in-city.module.scss"
import { MdArrowDropDown } from "react-icons/md"

const SearchInCity = (props) => {
  const { className = "", onClickcitySheetState, selectedCityText } = props

  return (
    <div className={`${className} ${styles.citySearch} u-mb16 flex flexYcenter`}>
      Searching in
      <button onClick={onClickcitySheetState} className={`${styles.headingLabel} flexYcenter inlineFlex`}>
        {selectedCityText} <MdArrowDropDown size="1.429em" />
      </button>
    </div>
  )
}

export default SearchInCity
