import React, { useContext } from 'react'

import Cart from '../../components/Cart/Cart'
import Cho from '../../components/Cho/Cho'
import ModalCart from '../../components/modalcart/ModalCart'
import { Context } from '../../Store/Store'

const CartPage = () => {
  const {cart, increaseQuantityById, checkUser} = useContext(Context)
  
  console.log(cart)
  checkUser()
  return (   
    <div className="container d-flex justify-content-around flex-wrap my-5">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
        {cart.length > 0 ? (
          cart.map((vape) => (
            <Cart
              key={vape.id}
              vape={vape}
              {...vape}
              increaseQuantityById={increaseQuantityById}
              
            />
            
          ))
        ) : (
          <p className="  ">No ha agregado un producto a favoritos</p>
        )}
        
        <Cho/>
        </div> 
  )
}

export default CartPage