import React, { useContext } from "react";
import { Context } from "../../Store/Store";
import './ModalCart.css'

const ModalCart = (props) => {
  const { model, information, price, quantity, image } = props;
    const {cartCheck} = useContext(Context)
  const suma = price * quantity;
  return (

    <div className="cartCont ">
      <div className="mt-5 h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              <div className="rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={image}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{information}</p>
                      <p>
                        <span className="text-muted" name='model' onChange={cartCheck}>Modelo: </span>
                        {model}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex ca " name='quantity' onChange={cartCheck}> CANTIDAD:{quantity} </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-3 text-dark">${suma}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
