import { Link } from "react-router-dom";
import Logo from "./logo"
import * as styles from "./navigation-sheet.module.scss"

const NavigationSheet = ({ data, onClickAddPropertyModal }) => {
  return (
    <>
      <div className={`${styles.navHeader} u-mb32`} id="navigationHeader">
        <Link href="/" prefetch={false}>
          <p>
            <Logo variant="colored" className={styles.mLogo} />
          </p>
        </Link>
      </div>
      <nav className={`${styles.navLinks} u-spbwy16`} id="navigationLinkList">
        {data.map((item, i) => {
          return (
            <>
              {item.external ? (
                <p className={styles.navLink} href={item.link}>{item.text}</p>
              ) : (
                <Link href={item.link} prefetch={false}>
                  <p className={styles.navLink} title={item.title}>
                    {item.text}
                  </p>
                </Link>
              )}
            </>
          )
        })}
        <button onClick={onClickAddPropertyModal} className={styles.navLink}>
          Add Property
        </button>
      </nav>
    </>
  )
}

export default NavigationSheet
