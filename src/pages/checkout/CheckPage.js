import React, { useContext } from 'react'
import CheckForm from '../../components/CheckForm/CheckForm'

import ModalCart from '../../components/modalcart/ModalCart'
import { Context } from '../../Store/Store'


const CheckPage = () => {
    const {cart} = useContext(Context)
  return (
    <div className="container d-flex justify-content-around flex-wrap my-5">
        
        {cart.length > 0 ? (
        cart.map((vape) => (
          <ModalCart
            key={vape.id}
            vape={vape}
            {...vape}
        
          />
        ))
      ) : (
        <p className="  ">No ha agregado un producto a favoritos</p>
      )}<CheckForm/></div>
  )
}

export default CheckPage