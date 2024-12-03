import { MdPhone } from "react-icons/md"
import Button from "./button"
import styles from "./show-phone-number.module.scss"

const ShowPhoneNumber = ({ className = "", GACallback, ...props }) => {
  return (
    <Button className={`${className} ${styles.phoneButton}`} size="sm" variant="secondaryBtn" {...props}>
      <span className={`${styles.icon} inlineFlex flexYcenter flexXcenter`}>
        <MdPhone />
      </span>
      <span>Show Phone Number</span>
    </Button>
  )
}

export default ShowPhoneNumber
