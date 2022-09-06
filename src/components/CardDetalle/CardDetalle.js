import React, { useContext } from 'react'
import { Context } from "../../Store/Store";
import { Link } from 'react-router-dom';
import './CardDetalle.css'

const CardDetalle = (props) => {
    const {favAdd, favoritos} = useContext(Context)
    const {description, image, information, stock, price, model, id, vape} = props
    const isfav = favoritos.some(fav=> fav.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']

    return (

    <div className="card" style={{width: "60rem"}}>
        <img className="card-img-top" src={image} alt="Card image"/>
            <div className="card-body">
                    <h4 className="card-title">{model}</h4>
                    <p className=''>{description}</p>
                    <p className=''>{information}</p>
                    <p className=''>Precio: ${price}</p>
                    <p className=''>Unidades disponibles: {stock}</p>
                    <div className='d-grid gap-2 d-md-flex col-6'>
                    <button type="button" className="btn btn-primary btn-md">Agregar al carrito</button>
                    <button className='' onClick={() => favAdd(vape) }> <span aria-label={label} role='img'>{emoji}</span></button>
                    <button className='btn btn-primary' to='/'>Volver</button>
                    </div>
            </div>
    </div>
    )
}

export default CardDetalle

