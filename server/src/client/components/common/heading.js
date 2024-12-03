import classNames from "classnames/bind"
import { createElement } from "react"
import styles from "./heading.module.scss"

const Heading = ({ children, className = "", variant = "h2", style = {}, ...props }) => {
  const cn = classNames.bind(styles)
  return createElement(variant, { className: cn(className, variant), style: style, ...props }, children)
}

export default Heading
