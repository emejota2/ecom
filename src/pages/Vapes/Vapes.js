import React, { useContext, useState } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../Store/Store'

export const Vapes = () => {
  const {producto, setProducto} = useContext(Context)

  let Vape = producto.filter((vape) => vape.category === 'vapes')
  console.log(Vape)

  const handleClick = (e) => {
    console.log(producto)
    if(e.target.value === 'precioAsc') {
        Vape.sort(function (a, b){
          return (a.price - b.price)
      })

          setProducto(Vape)
          return Vape
    }

    if(e.target.value === 'precioDesc') {
        Vape.sort(function (a, b){
            return (b.price - a.price)
        })

         setProducto(Vape)
        return Vape
    }
  }
    

  return (
        <div className='container mt-5'>
          <div className='d-flex flex-wrap justify-content-around text-start'>
            <div className='d-flex filtro'>
              <span className='me-3 mt-5 text-nowrap'>Ordenar por:</span>
              <select className="form-select mt-5 text-dark" onChange={(e) => handleClick(e)}>
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
