import React, { useContext } from 'react'
import Card from '../../../components/Card/Card'
import { Context } from '../../../Store/Store'
import './Baterias.css'

const Baterias = () => {
    const {producto} = useContext(Context)
    const Baterias = producto.filter((bat) => bat.category === 'accesorios')
    return (
        <div className='container '>
        <div className='d-flex flex-wrap justify-content-around'>
        {
          Baterias.length>0?(
            Baterias.map((vapes)=>(
              <Card key={vapes.id} {...vapes} vape={vapes}/>
            ))
          ) : (<p>cargando</p>)
        }
        </div>
        </div>
    )
}

export default Baterias