import * as styles from "./layout.module.scss"

const Layout = ({ className = "", children }) => {
  return <div className={`${className} ${styles.layout}`.trim()}>{children}</div>
}

export default Layout
