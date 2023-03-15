import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPreview, addToCart, removeFromCart } from "../../Redux/store";
import "./style.scss";

function DetailsPage() {
  console.log("inside details page");
  const preview = useSelector((state) => state.preview);
  console.log(preview);
  const cart = useSelector((state) => state.cart);
  const addedToCart =
    cart.findIndex((e) => e.id === preview.id) > -1 ? true : false;
  const dispatch = useDispatch();
  const [productAddedToCart, addProductToCart] = useState(false);

  const addToCartClicked = (value) => {
    addProductToCart(value);
    value ? dispatch(addToCart(preview)) : dispatch(removeFromCart(preview.id));
  };

  return (
    <div>
      <img className="detailImage" src={preview.images[0]}></img>
      <div className="detailsdata">
        <h2 className="titleData">{preview.title}</h2>
        <h4 className="subtitleData">{preview.brand}</h4>
        <h4 className="subtitleData">{preview.description}</h4>
        <h4 className="subtitleData">{preview.category}</h4>
        <h2 className="subtitleData">${preview.price}</h2>
      </div>
      <div className="actionButons">
        {!productAddedToCart && !addedToCart ? (
          <div
            variant="primary"
            className="addToCart"
            onClick={() => addToCartClicked(true)}
          >
            Add to cart
          </div>
        ) : (
          <div
            variant="primary"
            className="removeFromCart"
            onClick={() => addToCartClicked(false)}
          >
            Remove from cart
          </div>
        )}
        <div variant="primary" className="buyNow">
          Buy Now
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
