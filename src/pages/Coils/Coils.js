import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../Store/Store'

export const Coils = () => {
    const {producto} = useContext(Context)

    const Resistencias = producto.filter((coil) => coil.category === 'resistencias')
    return (
    <div className='container '>
        <div className='d-flex flex-wrap justify-content-around'>
        {
          Resistencias.length>0?(
            Resistencias.map((coil)=>(
              <Card key={coil.id} {...coil} vape={coil}/>
            ))
          ) : (<p>cargando</p>)
        }
        </div>
        </div>
  )
}