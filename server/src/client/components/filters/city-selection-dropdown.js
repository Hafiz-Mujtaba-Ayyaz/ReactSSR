import { useRef } from "react"
import { capitalizeFirstLetter } from "../../utils/utility"
import DropdownMenu from "../common/dropdown-menu"
import CitySelection from "./city-selection"
import Heading from "../common/heading"
import styles from "./home-filters.module.scss"

const cities = require("../../utils/cities.json")

const CitySelectionDropdown = (props) => {
  const dropDownRef = useRef()
  const { selectedCity, selectCity } = props

  const onCitySelection = (city) => {
    dropDownRef.current.toggleState()
    selectCity(city)
  }

  return (
    <DropdownMenu
      classNameInner={styles.tabContainer}
      ref={dropDownRef}
      buttonText={capitalizeFirstLetter(selectedCity.name)}
      triggerStyle="button"
    >
      <div className={styles.cityDropDown}>
        <CitySelection selectCity={onCitySelection} data={cities} placeholder="Search City" />
        <Heading className={`${styles.dropDownHeading} u-mb0`} variant="h4">
          Popular Cities
        </Heading>
        <div className={`${styles.popularCityList} u-spbwy16`}>
          {cities.slice(0, 7).map((popularCity) => {
            return (
              <a
                key={popularCity.externalID}
                onClick={() => {
                  onCitySelection(popularCity)
                }}
                className={`${selectedCity.name === popularCity.name ? styles.selected : ""} inlineFlex`}
              >
                {popularCity.name}
              </a>
            )
          })}
        </div>
      </div>
    </DropdownMenu>
  )
}

export default CitySelectionDropdown
