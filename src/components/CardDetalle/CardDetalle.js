import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../../Store/Store";
import './CardDetalle.css'

const CardDetalle = (props) => {
    const {favAdd, favoritos} = useContext(Context)
    const {description, image, information, stock, price, model, id, producto} = props
    const isfav = favoritos.some(fav=> fav.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']

    return (

    // <div className="card-detalle" style={{width: "60rem"}}>
    //     <img className="card-img-top" src={image} alt="Card image"/>
    //         <div className="card-body">
    //                 <h4 className="card-title">{model}</h4>
    //                 <p className=''>{description}</p>
    //                 <p className=''>{information}</p>
    //                 <p className=''>Precio: ${price}</p>
    //                 <p className=''>Unidades disponibles: {stock}</p>
    //                 <div className='d-grid gap-2 d-md-flex col-6'>
    //                 <button type="button" className="btn btn-primary btn-md">Agregar al carrito</button>
    //                 <button className='' onClick={() => favAdd(producto) }> <span aria-label={label} role='img'>{emoji}</span></button>
    //                 <Link to='/'><button className='btn btn-primary'>Volver</button></Link>
    //                 </div>
    //         </div>
    // </div>

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

