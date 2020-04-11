import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
}) => {
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-info mt-2 mb-2 card-btn-1">
            View Product
          </button>
        </Link>
      )
    );
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={() => {}}
          className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
        >
          Add to cart
        </button>
      )
    );
  };

  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)}</p>
        <p className="card-p black-10">£ {product.price.toFixed(2)}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>

        <br />
        {showViewButton(showViewProductButton)}

        {showAddToCartBtn(showAddToCartButton)}
      </div>
    </div>
  );
};

export default Card;
