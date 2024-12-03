import styles from "./close.module.scss"

const Close = ({ className = "", ...props }) => {
  const { hideLabel = false, ...rest } = props
  return (
    <button className={`${styles.close} ${className}`.trim()} {...rest}>
      <svg viewBox="-8 -8 16 16">
        <path d="M3 3-3-3M3-3-3 3" strokeLinecap="round" stroke="currentcolor" />
      </svg>
      {!hideLabel && "close"}
    </button>
  )
}

export default Close
