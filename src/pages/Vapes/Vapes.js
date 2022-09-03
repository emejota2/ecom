import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../store/store'

export const Vapes = () => {
    const {producto} = useContext(Context)

    const Vapes = producto.filter((vape) => vape.category === 'vapes')
  return (
    <div className='container '>
        <div className='d-flex flex-wrap justify-content-around'>
        {
          Vapes.length>0?(
            Vapes.map((vapes)=>(
              <Card key={vapes.id} {...vapes}/>
            ))
          ) : (<p>cargando</p>)
        }
        </div>
        </div>
  )
}
