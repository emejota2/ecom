import React from 'react'
import './CardDetalle.css'
import { Context } from '../../Store/Store'

const CardDetalle = (props) => {
    const {producto} = useContext(Context)

    const {description, image, information, stock, price, model} = props
    return (
    <div className=''>
        <div className='d-flex'>
            <img className='' alt="" src={image}/>
            <div className=''>
                <h3 className=''>{model}</h3>
                <p className=''>{description}</p>
                <p className=''>{information}</p>
                <p className=''>{price}</p>
                <p className=''>{stock}</p>
                <div class="d-grid gap-2 d-md-block">
                    <button class="btn" type="button">Agregar al carrito</button>
                    <button class="btn" type="button">Fav</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetalle

