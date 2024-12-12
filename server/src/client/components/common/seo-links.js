import * as styles from "./seo-links.module.scss"
import Heading from "./heading"
import LinkWithCount from "./link-with-count"

const SeoLinks = ({ data = [], className = "" }) => {
  return (
    <>
      <div className={`${className} ${styles.propertyLinks}`}>
        <div className={`${styles.list} u-spbwx8 flex`}>
          {data?.map((link, i) => {
            return (
              <LinkWithCount
                className={`${styles.listItem} inlineFlex flexYcenter`}
                url={`${link.href}`}
                count={link.count}
                title={link.title}
                key={i}
              >
                {link.title}
              </LinkWithCount>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SeoLinks
