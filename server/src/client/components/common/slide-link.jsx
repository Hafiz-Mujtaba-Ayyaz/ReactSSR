import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./slide-link.module.scss"

const LocationListSlide = ({ data = [], viewAllLocationText, viewAllLocationLink, onClickOpenSheet, ...props }) => {
  return (
    <>
      <section className={`${props.className} ${styles.locationList} flex`}>
        <div className={`${styles.itemList} flex`}>
          {data.map(({ title, href }, i) => {
            return (
              <Link href={href} key={i} prefetch={false}>
                <p className={`${styles.item} inlineFlex`}>{title}</p>
              </Link>
            )
          })}
          {!!viewAllLocationText && viewAllLocationLink ? (
            <Link href={viewAllLocationLink} className={"inlineFlex"}>
              <p className={`${styles.item} inlineFlex`}>{viewAllLocationText}</p>
            </Link>
          ) : null}
        </div>
      </section>
    </>
  )
}

export default LocationListSlide
