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
                <h2 className=''>{model}</h2>
                <h2 className=''>{overview}</h2>
                <h2 className='texto2 '>calificacion: ⭐ {vote_average}</h2>
                <h2 className='texto2 '> Fecha de lanzamiento: {release_date}</h2>
                <button className='icon shadow' onClick={() => favAdd(movie)}><span aria-label={label} role='img'>{emoji}</span></button>
                <Link className='btn boton  shadow ' to='/appMovieReact'>Volver</Link>
            </div>
        </div>
    </div>
  )
}

export default CardDetalle

