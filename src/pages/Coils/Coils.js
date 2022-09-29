import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../Store/Store'

export const Coils = () => {
    const {producto, setProducto, handleClickResistencias, Resistencias} = useContext(Context)

    // const Resistencias = producto.filter((coil) => coil.category === 'resistencias')
    return (
    <div className='container mt-5'>
        <div className='d-flex flex-wrap justify-content-around'>
        <div className='d-flex filtro'>
              <span className='me-3 mt-5 text-nowrap'>Ordenar por:</span>
              <select className="form-select mt-5 text-dark" onChange={(e) => handleClickResistencias(e)}>
                    <option value="precioAsc">Menor precio</option>
                    <option value="precioDesc">Mayor precio</option>
              </select>
            </div>

            <div>
              <div className="d-flex flex-wrap justify-content-around">
              {
                Resistencias.length>0?(
                  Resistencias.map((coil)=>(
                    <Card key={coil.id} {...coil} vape={coil}/>
                  ))
                ) : (<p>cargando</p>)
              }
              </div>
            </div>
          </div>
        </div>
  )
}