import Button from "./button"
import styles from "./filter-drop-down-button.module.scss"

const FilterDropdownButton = () => {
  return (
    <div className={`${styles.btnList} flex u-spbwx16`}>
      <span className={styles.close}>Close</span>
      <Button variant="primaryBtn" size="sm">
        Search
      </Button>
    </div>
  )
}

export default FilterDropdownButton