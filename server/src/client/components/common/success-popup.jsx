import * as styles from "./success-popup.module.scss"

const MessagePopup = (props) => {
  const { className = "", heading, description, icon } = props
  return (
    <div className={`${className} ${styles.message} flex flexYcenter`}>
      <span className={`${styles.icon} inlineFlex flexYcenter flexXcenter u-mb16`}>{icon}</span>
      <div className={`${styles.heading} u-mb8`}>{heading}</div>
      <p style={{ textAlign: "center" }} className={`${styles.text} u-mb16`}>
        {description}
      </p>
    </div>
  )
}

export default MessagePopup
