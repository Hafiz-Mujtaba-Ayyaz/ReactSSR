import { useState } from "react"
import { useCookies } from "react-cookie"
import { CITY_COOKIE_KEY } from "../../utils/constants"
import AutocompleteSearch from "./autocomplete"
import * as styles from "./autocomplete.module.scss"

const cities = require("../../utils/cities.json")

const CitySelection = (props) => {
  const { selectCity, data, placeholder } = props
  const [value, setValue] = useState("")
  const [cookies, setCookie] = useCookies([CITY_COOKIE_KEY])

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const setCity = (value) => {
    let city = cities.filter((item) => {
      return item.name.toLowerCase() == value.toLowerCase()
    })[0]
    selectCity(city)

    setCookie(CITY_COOKIE_KEY, city, {
      path: "/",
      maxAge: 3600 * 24 * 7,
      sameSite: true,
    })
  }

  return (
    <div>
      <AutocompleteSearch
        items={data}
        shouldItemRender={(item, value) => {
          if (!value) {
            return true
          } else {
            return item?.name?.toLowerCase().indexOf(value?.toLowerCase()) > -1
          }
        }}
        getItemValue={(item) => item.name}
        renderItem={(item, isHighlighted) => (
          <div className={`${styles.item} ${isHighlighted ? "item-highlighted" : ""}`} key={item.name}>
            {item.name}
          </div>
        )}
        value={value}
        inputProps={{ className: `${styles.input}`, placeholder: placeholder }}
        wrapperStyle={{ position: "relative", display: "block" }}
        onChange={changeValue}
        onSelect={setCity}
        renderMenu={(children) => <div className={styles.menuList}>{children}</div>}
      />
    </div>
  )
}

export default CitySelection
