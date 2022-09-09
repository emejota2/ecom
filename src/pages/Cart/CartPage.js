import React, { useContext } from 'react'
import Cart from '../../components/Cart/Cart'
import Cho from '../../components/Cho/Cho'
import { Context } from '../../Store/Store'

const CartPage = () => {
  const {cart, increaseQuantityById} = useContext(Context)
  return (
    <div className="container d-flex justify-content-around flex-wrap mt-5">
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