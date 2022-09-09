import React, { useContext } from 'react'
import Card from '../../../components/Card/Card'
import { Context } from '../../../Store/Store'
import './Tanques.css'

const Tanques = () => {

    const {producto} = useContext(Context)
    const Tank = producto.filter((Tank) => Tank.type === 'tank')
    return (
        <div className='container '>
        <div className='d-flex flex-wrap justify-content-around'>
        {
          Tank.length>0?(
            Tank.map((vapes)=>(
              <Card key={vapes.id} {...vapes} vape={vapes}/>
            ))
          ) : (<p>cargando</p>)
        }
        </div>
        </div>
    )
}

export default Tanques