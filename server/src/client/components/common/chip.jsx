import * as styles from "../filters/add-keyword-filter.module.scss"
import Close from "./close-btn"

const Chip = (props) => {
  const { item, onRemove } = props
  const { name } = item
  return (
    <div key={name} className={`${props.className} ${styles.bubble} inlineFlex`}>
      {name}
      <Close
        style={{ padding: 10 }}
        hideLabel={true}
        onClick={(e) => {
          e.stopPropagation()
          onRemove(item)
        }}
      />
    </div>
  )
}

export default Chip
