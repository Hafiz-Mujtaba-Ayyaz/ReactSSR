import * as styles from "./no-result-found.module.scss"

const NoResultFound = (props) => {
  const { className="", searchIcon, crossIcon, text, description } = props
  return (
    <div className={`${styles.noListingMsg} ${className} flex flexYcenter flexXcenter`}>
      <div className={`${styles.noListingIcons} u-mb16`}>
        {searchIcon}
        {crossIcon}
      </div>
      <div className={`${styles.text} u-mb8`}>{text}</div>
      <p className={styles.des}>{description}</p>
    </div>
  )
}

export default NoResultFound
