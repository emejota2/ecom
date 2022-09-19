import React, { useContext } from 'react'
import { Context } from "../../Store/Store"
import './Filter.css'

const Filter = () => {
  const {filtro, producto, price} = useContext(Context)
  return (
    <div className="">
      <input type="range" onInput={ filtro } />
      <h1>Price: { price }</h1>
      <div>
      { producto.filter( product => { return product.price > parseInt(price, 10) }).map(product => {
        return <p key={product.brand}>{ product.brand } | { product.price } &euro; </p>
      })}        
      </div>
    </div>
  )
}

export default Filter