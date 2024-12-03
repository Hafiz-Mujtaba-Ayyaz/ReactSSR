import { useEffect, useRef } from "react"
import Close from "./close-btn"
import { crossIcon } from "./navigation-sheet.module.scss"
import styles from "./sheet.module.scss"

const Sheet = (props) => {
  const { className = "", children, position = "right", activeState, autoclose = false, setSheetState } = props
  const sheetRef = useRef(null)

  useEffect(() => {
    if (activeState) {
      document.documentElement.classList.add("overlay-open")
    }
    return () => {
      document.documentElement.classList.remove("overlay-open")
    }
  }, [activeState])

  return (
    <section
      className={`
          ${className}
          ${styles.sheet}
          ${position === "right" || position === "left" ? styles.horizontalSheet : ""}
          ${position === "right" ? styles.sheetRight : ""}
          ${position === "left" ? styles.sheetLeft : ""}
          ${position === "bottom" || position === "top" ? styles.verticalSheet : ""}
          ${position === "top" ? styles.sheetTop : ""}
          ${position === "bottom" ? styles.sheetBottom : ""}
          ${activeState ? styles.active : ""}
          `.trim()}
      ref={sheetRef}
    >
      <Close className={crossIcon} onClick={() => setSheetState(false)} />
      {children}
    </section>
  )
}

export default Sheet
