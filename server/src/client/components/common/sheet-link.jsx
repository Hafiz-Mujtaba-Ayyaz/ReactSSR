import React from "react";
import { useEffect } from "react"
import Heading from "./heading"
import LinkWithCount from "./link-with-count"
import * as styles from "./sheet-link.module.scss"

const SheetLink = ({ heading = "", data = {}, viewAllLocationText = "" }) => {
  useEffect(() => {
    const HeaderHeight = document.getElementById("linkHeader").offsetHeight
    document.getElementById("linkList").style.height = `calc(100% - ${HeaderHeight}px)`
  }, [])

  return (
    <>
      <div className={styles.header} id="linkHeader">
        {heading ? (
          <Heading className="u-mb0" variant="h3">
            {heading}
          </Heading>
        ) : null}
      </div>
      <div className={`${styles.linkList} u-spbwy8`} id="linkList">
        {data.map((link, i) => {
          return (
            <>
              <Heading className="u-mb0" variant="h3">
                {link.title}
              </Heading>
              {link.links.map((link) => (
                <LinkWithCount key={link.href} url={link.href} count={link.count} title={link.title}>
                  {link.title}
                </LinkWithCount>
              ))}
            </>
          )
        })}
        {viewAllLocationText ? <LinkWithCount className={styles.viewAll}> {viewAllLocationText} </LinkWithCount> : null}
      </div>
    </>
  )
}

export default SheetLink
