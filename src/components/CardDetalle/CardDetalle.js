import React, { useContext } from 'react'
import { Context } from "../../Store/Store";
import { Link } from 'react-router-dom';
import './CardDetalle.css'

const CardDetalle = (props) => {
    const {favAdd, favoritos} = useContext(Context)
    const isfav = favoritos.some(fav=> fav.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']
    const {description, image, information, stock, price, model, id, vape} = props

    return (

    <div className="card" style={{width: "60rem"}}>
        <img className="card-img-top" src={image} alt="Card image"/>
            <div className="card-body">
                    <h4 className="card-title">{model}</h4>
                    <p className=''>{description}</p>
                    <p className=''>{information}</p>
                    <p className=''>Precio: ${price}</p>
                    <p className=''>Unidades disponibles: {stock}</p>
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    <button className='fav ms-5' onClick={() => favAdd(vape) }> <span aria-label={label} role='img'>{emoji}</span></button>
                    <Link className='btn btn-primary ms-5' to='/'>Volver</Link>
            </div>
    </div>
    )
}

export default CardDetalle

