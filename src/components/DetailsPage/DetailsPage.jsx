import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailsPage() {
  console.log("inside details page");
  const preview = useSelector((state) => state.preview);
  console.log(preview);
  const dispatch = useDispatch();
  const [productAddedToCart, addProductToCart] = useState(false);

  return (
    <div>
      <img className="detailImage" src={preview.images[0]}></img>
      <div className="detailsdata">
        <h3 className="title">{preview.title}</h3>
        <h4 className="subtitle">{preview.brand}</h4>
      </div>
    </div>
  );
}

export default DetailsPage;
