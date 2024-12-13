import React from "react";
// import LazyLoad from "react-lazyload"
import { LazyLoadImage } from "react-lazy-load-image-component"

const ImageWrapper = ({ lazyProps, ...rest }) => {
  return (
    // <LazyLoad>
    <LazyLoadImage {...rest} />
    // </LazyLoad>
  )
}

export default ImageWrapper
