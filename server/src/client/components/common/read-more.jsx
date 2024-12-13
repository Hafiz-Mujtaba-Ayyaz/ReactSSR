import React from "react";
import { useState } from "react"
import { MdExpandMore } from "react-icons/md"
import * as styles from "./read-more.module.scss"

const ReadMore = ({ children, maxCharacterCount = 50 }) => {
  const [showMore, setShowMore] = useState(true)
  const showMoreStyles = { maxHeight: "145px", overflow: "hidden" }
  const shouldShowMore = children.length > maxCharacterCount

  return (
    <>
      <p
        style={{ whiteSpace: "pre-line" }}
        className={`
        ${styles.desText}
        ${showMore && shouldShowMore ? "" : styles.up}
      `}
        style={showMore ? showMoreStyles : {}}
      >
        {children}
      </p>

      {shouldShowMore ? (
        <button
          onClick={() => setShowMore(!showMore)}
          className={`
          ${styles.readMore}
          ${showMore ? "" : styles.up}
        `}
        >
          {showMore ? "Read More" : "Read Less"}
          <MdExpandMore />
        </button>
      ) : null}
    </>
  )
}

export default ReadMore
