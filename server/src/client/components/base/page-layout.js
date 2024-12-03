import Container from "./container";
import Footer from "../common/footer";
import Heading from "../common/heading";
import HeadingWithCount from "../common/heading-with-count";
import Navbar from "../common/navbar";
import styles from "./page-layout.module.scss";
import { useEffect } from "react";
import Fonts from "../common/font";
import { Helmet } from "react-helmet";

const PageLayout = (props) => {
  const {
    count = 12345,
    className = "",
    children,
    pageTitle = "",
    pageSubTitle = "",
    headTitle = "",
    bannerless = false,
    location_breadcrumb,
    bannerComponent = null,
    bannerComponentPlacement = "right",
    backButton = null,
    navBarIconPlacement = "left",
    containerClass = "",
    navBarClassName = "",
    description,
    verticalAlignment = "end",
    prevPageLink,
    nextPageLink,
    resolvedUrl,
    canonical,
    socialUrl,
  } = props;
  const hamburgerColor = bannerless ? "#000" : "#fff";
  const navbarStyles = { paddingTop: 8, paddingBottom: 8 };
  const addPropertyBtnClass = bannerless ? "primaryGhostBtn" : "primaryBtn";
  const navbarContainer = bannerless
    ? styles.bannerLessContainer
    : styles.bannerContainer;


  useEffect(() => {
    try {
      Fonts();
    } catch (err) {}
  }, []);

  return (
    <div className={className}>
      <Helmet>
        <title>{headTitle}</title>
        <meta name="description" content={description} />

        <meta property="fb:app_id" content="170198783141976" />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={description} />
        {socialUrl && <meta property="og:url" content={socialUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Lamudi.pkProperty" />
        <meta name="twitter:title" content={headTitle} />
        {socialUrl && <meta property="og:url" content={socialUrl} />}
        <meta name="twitter:description" content={description} />

        {prevPageLink ? <link href={prevPageLink} rel="prev" /> : null}
        {nextPageLink ? <link href={nextPageLink} rel="next" /> : null}
        {/* {resolvedUrl && pathname.indexOf("/search") == -1 ? (
          <link href={resolvedUrl} rel="canonical" />
        ) : null} */}
        {canonical ? <link href={canonical} rel="canonical" /> : null}
      </Helmet>
      {bannerless ? (
        <div>
          <Navbar
            hamburgerColor={hamburgerColor}
            addPropertyBtnClass={addPropertyBtnClass}
            style={bannerless ? navbarStyles : ""}
            className={`${navbarContainer} ${navBarClassName}`}
            backButton={backButton}
            containerClass={containerClass}
            bannerless={bannerless}
          />

          {pageTitle ? (
            <Container>
              <HeadingWithCount smallText={count}>{pageTitle}</HeadingWithCount>
            </Container>
          ) : null}
        </div>
      ) : (
        <div className={styles.banner}>
          <Navbar
            hamburgerColor={hamburgerColor}
            addPropertyBtnClass={addPropertyBtnClass}
            style={{ color: hamburgerColor }}
            className={navbarContainer}
            bannerless={bannerless}
          />
          {pageTitle ? (
            <Container>
              {bannerComponentPlacement === "right" ? (
                <div
                  className={`${
                    verticalAlignment === "start" ? "flexStart" : ""
                  } ${verticalAlignment === "end" ? "flexEnd" : ""} ${
                    verticalAlignment === "flexXcenter" ? "flexXcenter" : ""
                  } ${
                    verticalAlignment === "flexYcenter" ? "flexYcenter" : ""
                  } flex flex-grow flex-between`}
                >
                  <div className="u-mb16">
                    {pageTitle && (
                      <Heading
                        className={`${styles.mainHeading} u-mb8`}
                        variant="h1"
                      >
                        {pageTitle}
                      </Heading>
                    )}
                    {pageSubTitle && (
                      <Heading className={styles.mainHeading} variant="h4">
                        {pageSubTitle}
                      </Heading>
                    )}
                  </div>
                  <div className="u-py32 flex-grow">{bannerComponent}</div>
                </div>
              ) : (
                <div>
                  {pageTitle && (
                    <Heading
                      className={`${styles.mainHeading} u-mb8`}
                      variant="h1"
                    >
                      {pageTitle}
                    </Heading>
                  )}
                  {pageSubTitle && (
                    <Heading className={styles.mainHeading} variant="h4">
                      {pageSubTitle}
                    </Heading>
                  )}
                  {console.log(bannerComponent)}
                  {bannerComponent}
                </div>
              )}
            </Container>
          ) : null}
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
