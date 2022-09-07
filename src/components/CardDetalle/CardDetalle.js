import React, { useContext } from 'react'
import { Context } from "../../Store/Store";
import './CardDetalle.css'

const CardDetalle = (props) => {
    const {favAdd, favoritos} = useContext(Context)
    const {description, image, information, stock, price, model, id, producto} = props
    const isfav = favoritos.some(fav=> fav.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']

    return (

        <div className="box">
            <div className="images">
                <img className='imgDetail' src={image} alt="Card image"/>
            </div>
                        <div>
                        <div className="product">
                        <h1>{model}</h1>
                        <p className="desc">{description}</p>
                        <p className="desc">{information}</p>
                        <p>Precio: ${price}</p>
                        <p>Unidades disponibles: {stock}</p>
                        <div className="buttons">
                            <button className="add">Añadir al carrito</button>
                            <button className="like ms-1" onClick={() => favAdd(producto) }><span>♥</span></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardDetalle

