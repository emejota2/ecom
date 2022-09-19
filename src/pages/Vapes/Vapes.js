import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'
import { Context } from '../../Store/Store'

export const Vapes = () => {
    const {producto} = useContext(Context)

    const Vapes = producto.filter((vape) => vape.category === 'vapes')
  return (
        <div className='container mt-5'>
          <div className='d-flex flex-wrap justify-content-around'>
        <Filter/>
           {
            Vapes.length > 0?(
              Vapes.map((vape)=>(
                <Card key={vape.id} {...vape} vape={vape}/>
              ))
            ) : (<p>cargando</p>)
           }
          </div>
        </div>
  )
}
