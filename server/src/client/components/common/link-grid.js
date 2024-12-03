import { Link } from "react-router-dom";
import LayoutGrid from "../base/layout-grid"
import Heading from "./heading"
import styles from "./link-grid.module.scss"
import LinkWithCount from "./link-with-count"
import Skeleton from "./skeleton"

const LinkGrid = ({
  data = [],
  title = "",
  headingVariant = "h3",
  gridColumn = "",
  linkRowGap = "",
  className = "",
  isLoading = false,
  viewAllLocationLink,
}) => {
  return (
    <>
      <Heading className={styles.title} variant={headingVariant}>
        {title}
      </Heading>

      <LayoutGrid classname={`${className} u-mb24`} gridColumns={gridColumn} rowGap={linkRowGap}>
        {isLoading ? (
          <Skeleton count={16} height={24} width="100%" />
        ) : (
          data?.map((link, i) => {
            return (
              <LinkWithCount url={`${link.href}`} count={link.count} title={link.title} key={i}>
                {link.title}
              </LinkWithCount>
            )
          })
        )}

        {viewAllLocationLink && (
          <Link href={viewAllLocationLink} prefetch={false}>
            <p className={`${styles.viewAllLocation} inlineFlex flexYcenter`}>View All Cities</p>
          </Link>
        )}
      </LayoutGrid>
    </>
  )
}

export default LinkGrid
