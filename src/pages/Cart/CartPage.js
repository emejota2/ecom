import React, { useContext } from 'react'
import Cart from '../../components/Cart/Cart'
import { Context } from '../../Store/Store'

const CartPage = () => {
  const {cart} = useContext(Context)
  return (
    <div className="container d-flex justify-content-around flex-wrap mt-5">
        {cart.length > 0 ? (
          cart.map((vape) => (
            <Cart
              key={vape.id}
              vape={vape}
              {...vape}
            />
          ))
        ) : (
          <p className="  ">No ha agregado un producto a favoritos</p>
        )}
        </div>
  )
}

export default CartPage