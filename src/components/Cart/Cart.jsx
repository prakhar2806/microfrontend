import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/store";
import { Link } from "react-router-dom";
import "./style.scss";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let prices = 0;
    if (cart.length == 0) {
      setTotalPrice(0);
      return;
    }
    cart.forEach((element) => {
      prices += element.price;
    });
    setTotalPrice(prices);
  }, [cart]);

  return (
    <div className="CartContainer">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
      </div>

      {cart.map((item, index) => (
        <div key={`${item}_${index}`} className="Cart-Items">
          <div className="image-box">
            <img src={item.thumbnail} style={{ height: "120px" }} />
          </div>
          <div className="about">
            <h3 className="title">{item.title}</h3>
            <h4 className="subtitle">{item.brand}</h4>
          </div>
          <div className="prices">
            <div className="amount">${item.price}</div>
            <div
              className="remove"
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            >
              <u>Remove</u>
            </div>
          </div>
        </div>
      ))}

      <hr />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">{cart.length} items</div>
          </div>
          <div className="total-amount">${totalPrice}</div>
        </div>
        <button className="buttonEle">
          <Link className="active" to="checkout">
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
