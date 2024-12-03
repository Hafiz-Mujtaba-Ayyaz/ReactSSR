import { Link } from "react-router-dom";
import styles from "./link-with-count.module.scss"

const LinkWithCount = ({ className = "", children, count = "", url = "#", ...rest }) => {
  return (
    <Link href={url} prefetch={false}>
      <p className={`${className} ${styles.link} flex flexYcenter`} {...rest}>
        <span className={styles.text}>{children}</span>
        {count ? <span className={styles.count}>({count})</span> : null}
      </p>
    </Link>
  )
}

export default LinkWithCount
