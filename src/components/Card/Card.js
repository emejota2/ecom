import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Store/Store";
import "./Card.css";


const Card = (props) => {
  const {favAdd, favoritos} = useContext(Context)
  const {brand, model, price, image, information, id, vape}= props
  const isfav = favoritos.some(fav=> fav.id===id)
  const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']

  return (
    <div>
      <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <Link to={`/detalle/${id}`}><img src={image} alt="" /></Link>
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
            <button className='fav' onClick={() => favAdd(vape) }> <span aria-label={label} role='img'>{emoji}</span></button>
              <Link to="">
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
