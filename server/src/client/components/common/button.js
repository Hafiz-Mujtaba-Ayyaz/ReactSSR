import styles from "./button.module.scss"

const Button = ({
  children,
  variant = "",
  className = "",
  icon = "",
  type = "button",
  size = "",
  position = "left",
  block = false,
  ...props
}) => {
  return (
    <button
      className={`${className} ${styles.btn} ${variant === "primaryBtn" ? styles.primaryBtn : ""} ${
        variant === "primaryGhostBtn" ? styles.primaryGhostBtn : ""
      } ${variant === "secondaryBtn" ? styles.secondaryBtn : ""} ${
        variant === "secondaryGhostBtn" ? styles.secondaryGhostBtn : ""
      } ${size === "sm" ? styles.sm : ""} ${variant === "link" ? styles.btnLink : ""} ${
        size === "lg" ? styles.lg : ""
      } ${block ? styles.btnBlock : ""}`.trim()}
      type={type}
      {...props}
    >
      {icon && position === "left" ? icon : null}
      {children}
      {icon && position !== "left" ? icon : null}
    </button>
  )
}

export default Button
