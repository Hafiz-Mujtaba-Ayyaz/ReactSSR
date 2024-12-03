import styles from "./sticky-pricebar.module.scss"

const StickyBar = ({placement = "top", sticky = false, children}) => {
  return (
    <div className={`${styles.stickyBar} ${sticky === true ? styles.sticky : ""} ${placement === "top" ? styles.stickyTop : ''} ${placement === "bottom" ? styles.stickyBottom : ''}`}>
      {children}
    </div>
  )
}

export default StickyBar
