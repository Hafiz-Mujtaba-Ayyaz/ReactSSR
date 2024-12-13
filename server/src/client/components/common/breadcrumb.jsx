import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Container from "../base/container";
import * as styles from "./breadcrumb.module.scss";
import Router from "next/router";

const Breadcrumb = (props) => {
  const {
    className = "",
    backToSearchLink,
    breadcrumbs = [],
    currentLinkText,
  } = props;

  return (
    <div className={`${className} ${styles.listingBreadcrumb}`}>
      <Container>
        <div className={styles.breadcrumbList}>
          {backToSearchLink ? (
            <div className={styles.back}>
              <Link
                href={`${backToSearchLink}`}
                prefetch={false}
                replace={true}
              >
                <p className={styles.link}>
                  <MdKeyboardArrowLeft />
                  Back to Search
                </p>
              </Link>
            </div>
          ) : null}

          <div className={styles.item}>
            <Link href="/" prefetch={false}>
              <p className={styles.link} href="/">
                Lamudi.pk
              </p>
            </Link>
            <MdKeyboardArrowRight />
          </div>
          {/* TODO: location name only */}
          {breadcrumbs.map((item) => {
            return (
              <div className={styles.item} key={item.title}>
                <Link href={item.slug} prefetch={false}>
                  <p className={styles.link}>{item.title}</p>
                </Link>
                <MdKeyboardArrowRight />
              </div>
            );
          })}
          <div className={styles.item}>
            <span className={styles.disable}>{currentLinkText}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
