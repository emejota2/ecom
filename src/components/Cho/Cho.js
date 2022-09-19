import React, { useContext} from 'react'
import { Context } from '../../Store/Store'
import './Cho.css'

const Cho = () => {
  
    const {total,  handleShow, navigate} = useContext(Context)
    const ir = () => {
      navigate('/checkout')
    }
  return (
      <div className="cartCont w-100">
      <div>
        <div>
                <h5 className="text-center mb-2 text-dark">Monto</h5>
              </div>
              <div className="d-grid col-1 mx-auto">
                <a href="#!" className="text-danger ms-4"><i className="fas fa-trash fa-lg text-dark">${total}</i></a>
              </div>
        <div className="d-grid gap-2 col-6 mx-auto mb-3">
          <button type="button" onClick={ir} className="btn btn-warning btn-lg">Proceed to Pay</button>
        </div>
    </div>
  </div>
  )
}

export default Cho