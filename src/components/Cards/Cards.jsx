import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/store";
import React, { useState } from "react";
import "./style.scss";

const Cards = (data) => {
  const { id, title, description, images, thumbnail, brand, category } =
    data.data;
  const cart = useSelector((state) => state.cart);
  const addedToCart = cart.findIndex((e) => e.id === id) > -1 ? true : false;
  const dispatch = useDispatch();
  const [productAddedToCart, addProductToCart] = useState(false);

  const addToCartClicked = (value) => {
    addProductToCart(value);
    value ? dispatch(addToCart(data.data)) : dispatch(removeFromCart(id));
  };
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Brand: {brand}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <div className="footer">
          {!productAddedToCart && !addedToCart ? (
            <Button
              variant="primary"
              className="addToCart"
              onClick={() => addToCartClicked(true)}
            >
              Add to cart
            </Button>
          ) : (
            <Button
              variant="primary"
              className="removeFromCart"
              onClick={() => addToCartClicked(false)}
            >
              Remove from cart
            </Button>
          )}
          <Button variant="primary" className="buyNow">
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
