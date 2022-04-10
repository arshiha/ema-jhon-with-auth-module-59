import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt=""></img>

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          rating:
          <span className="rating-style">
            <Rating
              className="rating"
              placeholderRating={ratings}
              emptySymbol={<i className="far fa-star" bg="warning"></i>}
              placeholderSymbol={<i className="fas fa-star" bg="warning"></i>}
              fullSymbol={<i className="fas fa-star" bg="warning"></i>}
            />
          </span>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
