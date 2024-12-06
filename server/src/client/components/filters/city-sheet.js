import { useCookies } from "react-cookie"
import { FaCaretUp, FaSearch } from "react-icons/fa"
import { CITY_COOKIE_KEY } from "../../utils/constants"
import styles from "./city-sheet.module.scss"
import Heading from "../common/heading"
import { headingLabel } from "./mobile-filters.module.scss"
import TextInput from "../../components/common/input"

const cities = require("../../utils/cities.json")

const CitySheet = (props) => {
  const { selectedCity, selectCity, setCitySheetState } = props
  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY])

  const setCity = (city) => {
    selectCity(city)
    setCitySheetState(false)
    setCookie(CITY_COOKIE_KEY, city, {
      path: "/",
      maxAge: 3600 * 24 * 7,
      sameSite: true,
    })
  }
  return (
    <>
      <div className="u-mb16">
        Searching in
        <button className={`${headingLabel} inlineFlex flexYcenter`}>
          {selectedCity.name} <FaCaretUp />
        </button>
      </div>
      <div className={`${styles.citySearch} u-mb24`}>
        {/* <AutocompleteSearch data={cities} /> */}
        <TextInput type="text" placeholder="Search City" />
        <FaSearch />
      </div>
      <div className={styles.popularCities}>
        <Heading variant="h4">Popular Cities</Heading>
        <div className={`${styles.cityList} u-spbwy2`}>
          {cities.slice(0, 4).map((popularCity) => {
            return (
              <div>
                <button
                  className={`${styles.btn} ${selectedCity.name === popularCity.name ? styles.selected : ""}`}
                  onClick={() => setCity(popularCity)}
                  key={popularCity.externalID}
                >
                  {popularCity.name}
                </button>
              </div>
            )
          })}
        </div>
        <hr className={styles.cityLine} />
        <Heading variant="h4">All Cities</Heading>
        <div className={`${styles.cityList} u-spbwy2`}>
          {cities.map((popularCity) => {
            return (
              <div>
                <button className={styles.btn} onClick={() => setCity(popularCity)} key={popularCity.externalID}>
                  {popularCity.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CitySheet
