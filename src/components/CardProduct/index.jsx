import React from "react";
import { Container } from "./styles";

export default function CardProduct(props) {
  return (
    <Container>
      <div className="product-image">
        <img src={props.product.images[0].url} />
      </div>
      <div className="product-info">
        <h5>{props.product.title}</h5>
        <h6>{props.product.productVariants[0].price}</h6>
      </div>
      <div className="number">
        <span className="minus">-</span>
        <input readOnly type="text" className="input-minus-plus" value="1" />
        <span className="plus">+</span>
      </div>
    </Container>
  );
}
