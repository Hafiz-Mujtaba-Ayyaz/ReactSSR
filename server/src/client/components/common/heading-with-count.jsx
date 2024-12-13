import React from "react";
import Heading from "./heading"
import * as styles from "./heading-with-count.module.scss"

const HeadingWithCount = ({ children, className = "", variant = "h2", smallText = "", ...props }) => {
  return (
    <Heading variant={variant} className={className} {...props}>
      {children}
      {smallText ? (
        <small className={styles.small}>
          ({smallText})
        </small>
      ) : null}
    </Heading>
  )
}

export default HeadingWithCount
