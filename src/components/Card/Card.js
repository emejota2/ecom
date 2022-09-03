import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = (props) => {
  
  const {brand, model, price, image, information}= props

  return (
    <div>
      <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <Link to="/"><img src={image} alt="" /></Link>
        </div>
        <div className="product-details">
          <span className="product-catagory">{brand}</span>
          <h4>
            <Link to="/vape">{model}</Link>
          </h4>
          <h4 className="info">
            {information}
          </h4>
          <div className="product-bottom-details">
            <div className="product-price">
             Precio: {price}$
            </div>
            <div className="product-links">
              <Link to="/">
              <i className="bi bi-heart-fill me-2"></i>
              </Link>
              <Link to="/">
              <i className="bi bi-cart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
