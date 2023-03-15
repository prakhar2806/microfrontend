import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addToPreview } from "../../Redux/store";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const CardsMobile = (data) => {
  const { id, title, description, images, thumbnail, brand, category } =
    data.data;
  const cart = useSelector((state) => state.cart);
  const addedToCart = cart.findIndex((e) => e.id === id) > -1 ? true : false;
  const dispatch = useDispatch();

  return (
    <Card
      className={addedToCart ? `card selected` : `card`}
      onClick={() => dispatch(addToPreview(data.data))}
    >
      {addedToCart && <span className="cartLabel">Added to cart</span>}
      <Link className="productItemmobile" to={`/product/item/${id}`}>
        <div id="imgLogo">
          <Card.Img variant="top" src={images[0]} />
        </div>
        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Card.Title>{brand}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardsMobile;
