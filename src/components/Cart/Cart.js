import React, { useContext } from 'react'
import { Context } from '../../Store/Store'


const Cart = (props) => {
    const {deleteItemFromCart, } = useContext(Context)
    const {model,price, image, information, type, increaseQuantityById, quantity,vape}= props
    
   const suma = price*quantity
   
    
  return (
    <div class="mt-5 h-100" >
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                  class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div class=" rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={image}
                  class="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{information}</p>
                <p><span class="text-muted">Model: </span>{model} <span class="text-muted">Type: </span>{type}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onClick={()=>deleteItemFromCart(vape)}>
                  <i class="bi bi-dash"></i>
                </button>
                {quantity}
                <button class="btn btn-link px-2"
                  onClick={()=>increaseQuantityById(vape)}>
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${suma}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart