import React, { useContext } from "react";
import { Context } from "../../Store/Store";
import { Link } from "react-router-dom";
import "./Card.css";
import { Vapes } from "../../pages/Vapes/Vapes";

const Card = (props) => {
  const { favAdd, favoritos, cartAdd, borrarfav, deleteCart } = useContext(Context);
  const { brand, model, price, image, information, id, vape } = props;
  const isfav = favoritos.some((fav) => fav.id === id);

  return (
    <div id="container">
      <div class="cardGen">
        <Link to={`/detalle/${id}`}><img src={image} alt="Lago di Braies" className="imgCard" /></Link>
        <div class="card__details">
          <span class="tag">{brand}</span>

          <div class="name">{model}</div>

          <p className="infoTag mt-3">{information}</p>
          <p className="infoTag">Precio: ${price}</p>

          <div>
            <button className="bi bi-cart3" onClick={() => cartAdd(vape)}>
              {" "}
              <i className="bi bi-cart3"></i>
            </button>
          </div>
          {favoritos.some((fav) => fav.id === id) ? (
            <i
              className="bi bi-heart-fill text-danger"
              onClick={() => borrarfav(id)}
            ></i>
          ) : (
            <i
              className="bi bi-heart text-dark"
              onClick={() => favAdd(vape)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
