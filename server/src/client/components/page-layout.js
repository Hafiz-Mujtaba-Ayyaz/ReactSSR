import React from "react";
import { useLocation, useHistory } from 'react-router-dom';
import Footer from "../common/footer";
import styles from "./heading-with-count.module.scss"
import { createElement } from "react"



const HeadingWithCount = ({ children, className = "", variant = "h2", smallText = "", ...props }) => {
  return (
    <Heading variant={variant} className={className} {...props}>
      {children}
      {smallText ? (
        <small className={'text-sm text-gray-500'}>
          ({smallText})
        </small>
      ) : null}
    </Heading>
  )
}


const Heading = ({ children, className = "", variant = "h2", style = {}, ...props }) => {
  const cn = 'className'.bind(styles)
  return createElement(variant, { className: cn(className, variant), style: style, ...props }, children)
}


const Container = ({ children, className = "" }) => {
  return (
    <div
      style={{
        maxWidth: "71.25rem",
        paddingInline: "1rem",
        marginInline: "auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

const PageLayout = (props) => {
  const {
    count = 12345,
    className = "",
    children,
    pageTitle = "kjnjkn",
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

  const location = useLocation();
  // const navigate = useNavigate();
  
  const hamburgerColor = bannerless ? "#000" : "#fff";
  const navbarStyles = { paddingTop: 8, paddingBottom: 8 };
  const addPropertyBtnClass = bannerless ? "bg-transparent border-2 border-primary text-primary" : "bg-primary text-white";
  const navbarContainerClass = bannerless ? "bg-white shadow-md" : "bg-transparent";

  return (
    <div className={`min-h-screen ${className}`}>


      {bannerless ? (
        <div>
          {/* <Navbar
            hamburgerColor={hamburgerColor}
            addPropertyBtnClass={addPropertyBtnClass}
            className={`${navbarContainerClass} ${navBarClassName} py-2`}
            backButton={backButton}
            containerClass={containerClass}
            bannerless={bannerless}
          /> */}

          {pageTitle && (
            <div></div>
            // <Container>
            //   <HeadingWithCount smallText={count}>{pageTitle}</HeadingWithCount>
            // </Container>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          {/* <Navbar
            hamburgerColor={hamburgerColor}
            addPropertyBtnClass={addPropertyBtnClass}
            className={navbarContainerClass}
            bannerless={bannerless}
          /> */}
          {pageTitle && (
            <Container>
              {bannerComponentPlacement === "right" ? (
                <div className={`flex flex-grow justify-between items-${verticalAlignment} py-8`}>
                  <div className="space-y-4">
                    {pageTitle && (
                      <h1 className="text-4xl font-bold">{pageTitle}</h1>
                    )}
                    {pageSubTitle && (
                      <h4 className="text-xl">{pageSubTitle}</h4>
                    )}
                  </div>
                  <div className="flex-grow py-8">{bannerComponent}</div>
                </div>
              ) : (
                <div>
                  {pageTitle && (
                    <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
                  )}
                  {pageSubTitle && (
                    <h4 className="text-xl mb-4">{pageSubTitle}</h4>
                  )}
                  {bannerComponent}
                </div>
              )}
            </Container>
          )}
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
