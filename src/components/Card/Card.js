import React, { useContext } from "react";
import { Context } from "../../Store/Store";
import { Link } from "react-router-dom";
import "./Card.css";
import { Vapes } from "../../pages/Vapes/Vapes";


const Card = (props) => {
  const {favAdd, favoritos, cartAdd, borrarfav} = useContext(Context)
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
            Precio: ${price}
            </div>
            <div className="product-links">
              {favoritos.some(fav => fav.id===id) ? <i className="bi bi-heart-fill text-danger fs-4 ms-2" onClick={() => borrarfav(id)} ></i> : <i className="  bi bi-heart-fill text-white fs-4 ms-2" onClick={() => favAdd(vape)} ></i>}
            <button className='fav' onClick={() => favAdd(vape) }> <span aria-label={label} role='img'>{emoji}</span></button>
            <button className='fav' onClick={() => cartAdd(vape) }> <i className="bi bi-cart"></i></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
