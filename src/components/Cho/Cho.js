import React, { useContext } from 'react'
import { Context } from '../../Store/Store'

const Cho = () => {
    const {total} = useContext(Context)
    
  return (
    <div className="">
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">monto</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg">{total}</i></a>
              </div>
    <div className="card-body">
      <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
    </div>
  </div>
  )
}

export default Cho