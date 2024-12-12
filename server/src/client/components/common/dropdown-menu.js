import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import * as styles from "./dropdown-menu.module.scss"
import { useDetectOutsideClick } from "./useDetectOutsideClick"
import { MdArrowDropDown } from "react-icons/md"

const DropdownMenu = forwardRef(
  (
    {
      className = "",
      classNameInner = "",
      triggerClassName = "",
      buttonText,
      children,
      isMenu = false,
      menuPlacement = "left",
      triggerStyle = "",
      autoclose = false,
      callback,
      customRef,
      styleDropdownMenu = {},
    },
    ref
  ) => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)

    const toggleState = () => {
      setIsActive(!isActive)
      if (callback) {
        callback(!isActive)
      }
    }

    useImperativeHandle(ref, () => ({
      toggleState,
      setIsActive,
    }))

    useDetectOutsideClick(customRef ? customRef : dropdownRef, isActive, autoclose, {
      callback: toggleState,
      setIsActive,
    })

    return (
      <div className={`${className} ${styles.dropdown}`}>
        <button
          className={`${styles.dropdownTrigger} ${
            triggerStyle === "button" ? styles.btn : ""
          } ${triggerClassName}`.trim()}
          onClick={toggleState}
        >
          {buttonText}
          <MdArrowDropDown size="1.5em" style={{ marginRight: -8 }} />
        </button>
        {isMenu ? (
          <nav
            className={`${styles.dropdownMenu} ${isActive ? styles.active : ""} ${
              menuPlacement === "right" ? styles.dropdownMenuRight : ""
            }`.trim()}
            ref={dropdownRef}
            style={{ ...styleDropdownMenu }}
          >
            {children}
          </nav>
        ) : (
          <div
            className={`${classNameInner} ${styles.dropdownContainer} ${isActive ? styles.active : ""} ${
              menuPlacement === "right" ? styles.dropdownMenuRight : ""
            }`.trim()}
            ref={dropdownRef}
            style={{ ...styleDropdownMenu }}
          >
            {children}
          </div>
        )}
      </div>
    )
  }
)

export default DropdownMenu
