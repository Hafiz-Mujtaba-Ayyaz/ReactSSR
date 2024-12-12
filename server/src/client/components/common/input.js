import * as styles from "./input.module.scss"

const TextInput = ({ type = "text", className = "", rows = "4", ...props }) => {
  return (
    <>
      {type === "textarea" && <textarea rows={rows} className={`${styles.input} ${className}`} {...props} />}
      {type == "text" && <input type={type} className={`${styles.input} ${className}`} {...props} />}
      {type == "number" && <input type={type} className={`${styles.input} ${className}`} {...props} />}
    </>
  )
}

export default TextInput
