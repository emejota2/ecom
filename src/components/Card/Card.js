import React, { useContext } from "react";
import { Context } from "../../Store/Store";
import { Link } from "react-router-dom";
import "./Card.css";

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
          <div className="d-flex justify-content-between">
          <div className="">
            <button className="bi bi-cart3 mt-1 pt-3 ms-5 cart" onClick={() => cartAdd(vape)}>
              {" "}
              <i className="bi bi-cart3 mt-2"></i>
            </button>
          </div>
          <button className="mt-2 pt-3 w-50 me-3"> {favoritos.some((fav) => fav.id === id) ? (
            <i
              className="bi bi-heart-fill text-danger mt-1"
              onClick={() => borrarfav(id)}
            ></i>
          ) : (
            <i
              className="bi bi-heart text-dark mt-1"
              onClick={() => favAdd(vape)}
            ></i>
          )} </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
