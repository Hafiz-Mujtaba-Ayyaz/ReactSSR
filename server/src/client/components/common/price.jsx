import React from "react";
import * as styles from "./price.module.scss"
import Heading from "./heading"
import { formatPrice } from "../../utils/utility"

const Price = (props) => {
  const { priceUnit="PKR", className="", price="", variant="h2" } = props

  return (
    <Heading className={`${className} ${styles.price}`} variant={variant}>
      {price > 0 ? <><small>{priceUnit}</small> {formatPrice(price)}</> : "Contact for price"}
    </Heading>
  )
}

export default Price
