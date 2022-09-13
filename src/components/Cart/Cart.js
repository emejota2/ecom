import React, { useContext } from 'react'
import { Context } from '../../Store/Store'
import './Cart.css'


const Cart = (props) => {
    const {deleteItemFromCart, } = useContext(Context)
    const {model,price, image, information, type, increaseQuantityById, quantity,vape}= props
    
    const suma = price*quantity

  return (
    <div className='cartCont'>
    <div className="mt-5 h-100" >
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div className=" rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={image}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{information}</p>
                <p><span className="text-muted">Model: </span>{model} <span className="text-muted">Type: </span>{type}</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onClick={()=>deleteItemFromCart(vape)}>
                  <i className="bi bi-dash text-dark"></i>
                </button>
                <p className='text-dark'>{quantity}</p>
                <button className="btn btn-link px-2 text-dark"
                  onClick={()=>increaseQuantityById(vape)}>
                  <i className="bi bi-plus text-dark"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-3 text-dark">${suma}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a> 
              </div>
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