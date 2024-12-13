import React from "react";
import * as styles from "./area-list-popup.module.scss"
import { MdCheckCircle } from "react-icons/md"
import Heading from "./heading"
// import { useCookies } from "react-cookie"
// import { AREA_COOKIE_KEY } from "../../utils/constants"

const AreaList = (props) => {
  const { setModalState, selectArea, selectedArea } = props

  const areaList = [
    { short: "Sq. Ft.", value: "Square Feet" },
    { short: "Sq. Yd", value: "Square Yard" },
    { short: "Sq. M", value: "Square Meter" },
    { short: "Marla", value: "Marla" },
    { short: "Kanal", value: "Kanal" },
  ]

  // const [cookie, setCookie] = useCookies([AREA_COOKIE_KEY])

  const setArea = (item) => {
    // setCookie(AREA_COOKIE_KEY, item, {
    //   path: "/",
    //   maxAge: 3600 * 24,
    //   sameSite: true,
    // })

    selectArea(item)
    setModalState(false)
  }

  return (
    <>
      <Heading className="u-mb24" variant="h4">
        Area Unit
      </Heading>
      <div className={styles.areaList}>
        {areaList.map((item) => {
          return (
            <button
              key={item.value}
              onClick={(e) => {
                e.preventDefault()
                setArea(item)
              }}
              className={styles.areaUnit}
            >
              {item.value}
              {item.value == selectedArea.value && <MdCheckCircle className={styles.icon} style={{ marginLeft: 8 }} />}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default AreaList
