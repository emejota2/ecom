import React, { useContext, useState } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../Store/Store'
import './Vapes.css'

export const Vapes = () => {
  const {producto, setProducto, handleClickVapes, Vape} = useContext(Context)


  return (
        <div className='container mt-5'>
          <div className='d-flex flex-wrap justify-content-around text-start'>
            <div className='d-flex filtro mt-5 orden'>
              <span className='me-3 mt-5 text-nowrap '>Ordenar por:</span>
              <select className="form-select mt-5 text-dark filter" onChange={(e) => handleClickVapes(e)}>
                    <option value="precioAsc">Menor precio</option>
                    <option value="precioDesc">Mayor precio</option>
              </select>
            </div>

            <div>
              <div className='d-flex flex-wrap justify-content-around'>
            {
              Vape.length > 0?(
                Vape.map((vape)=>(
                  <Card key={vape.id} {...vape} vape={vape}/>
                ))
              ) : (<p>cargando</p>)
            }
            </div>
           </div>
          </div>
        </div>
  )
}
