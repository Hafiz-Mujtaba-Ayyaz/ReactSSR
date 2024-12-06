import Pagination from "rc-pagination"
import "../../../node_modules/rc-pagination/assets/index.css"
import styles from "./pagination.module.scss"

const Paginate = ({ className = "", ...props }) => {
  return <Pagination className={`${className} ${styles.pagination} flex flexYcenter flexXcenter`} {...props} />
}

export default Paginate
