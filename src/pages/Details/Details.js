import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardDetalle from '../../components/CardDetalle/CardDetalle'
import { Context } from '../../Store/Store'


const Details = () => {
  const {producto} = useContext(Context)
  const {id} = useParams()
  const cardDetalle = producto.filter((productos)=>productos.id == id)
  return (
    <div className='container mt-5'>
    <div className='d-flex flex-wrap justify-content-around'>
    {
      cardDetalle.length > 0? (
        cardDetalle.map((producto)=>(
          <CardDetalle key={producto.id} {...producto} producto={producto}/>
        ))
      ) : (<p>cargando</p>)
    }
    </div>
    </div>
  )
}

export default Details