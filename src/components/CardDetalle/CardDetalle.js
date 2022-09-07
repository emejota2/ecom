import React, { useContext } from 'react'
import './CardDetalle.css'
import { Context } from "../../Store/Store";


const CardDetalle = (props) => {
    const {favAdd, favoritos} = useContext(Context)
    const isfav = favoritos.some(fav=> fav.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']
    const {description, image, information, stock, price, model, id} = props

    return (
    <div className='mt-5'>
        <div className='d-flex mt-5 mb-5'>
            <img className="card-img-top" alt="imagen del producto" src={image}/>
            <div className='card-body'>
                <h3 className=''>{model}</h3>
                <p className=''>{description}</p>
                <p className=''>{information}</p>
                <p className=''>Precio: ${price}</p>
                <p className=''>Unidades disponibles: {stock}</p>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                <a className='fav ms-5' onClick={() => favAdd(model) }> <span aria-label={label} role='img'>{emoji}</span></a>
                </div>
            </div>
        </div>
    )
}

export default CardDetalle

