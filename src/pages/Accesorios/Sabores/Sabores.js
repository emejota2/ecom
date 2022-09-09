import React, { useContext } from 'react'
import Card from '../../../components/Card/Card'
import { Context } from '../../../Store/Store'
import './Sabores.css'

const Sabores = () => {

    const {producto} = useContext(Context)
    const Liquid = producto.filter((Liquid) => Liquid.type === 'e-Liquid')
    return (
        <div className='container '>
        <div className='d-flex flex-wrap justify-content-around'>
        {
          Liquid.length>0?(
            Liquid.map((vapes)=>(
              <Card key={vapes.id} {...vapes} vape={vapes}/>
            ))
          ) : (<p>cargando</p>)
        }
        </div>
        </div>
    )
}

export default Sabores