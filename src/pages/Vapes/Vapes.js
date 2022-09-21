import React, { useContext, useState } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../Store/Store'

export const Vapes = () => {
  const {producto, setProducto} = useContext(Context)
  const [ultimo, setUltimo] = useState([]);
  const [menorPrecio, setMenorPrecio] = useState([]);
  const [otros, setOtros] = useState([]);
  const [otro, setOtro] = useState([]);
  const [todos, setTodos] = useState([]);
  const [menorMayor, setMenorMayor] = useState([]);
  const [mayorMenor, setMayorMenor] = useState([]);
  const Vape = producto.filter((vape) => vape.category === 'vapes')
  
  const handleClick = (e) => {
    if(e.target.value === 'precioAsc') {
        setProducto(todos)
        otros = producto.filter(producto => producto.price !== 0)
        otros.sort(function (a, b){
            return (a.price - b.price)
        })
        setUltimo(menorMayor)
        setMenorPrecio(otros)
        return otros
    }

    if(e.target.value === 'precioDesc') {
        setMenorPrecio([])
        producto.sort(function (a, b){
            return (b.price - a.price)
        })
        setUltimo(mayorMenor)
        setProducto(producto)
        return producto
    }
  }
    

  return (
        <div className='container mt-5'>
          <div className='d-flex flex-wrap justify-content-around text-start'>
            <div className='d-flex filtro'>
              <span className='me-3 mt-5 text-nowrap'>Ordenar por:</span>
              <select className="form-select mt-5 text-dark" defaultValue={otro} selected={otro} onChange={(e) => handleClick(e)}>
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
