import React, { useContext } from 'react'
import { Context } from '../../Store/Store'

const Cho = () => {
  return (
    <div class="">
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">monto</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg">3</i></a>
              </div>
    <div class="card-body">
      <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
    </div>
  </div>
  )
}

export default Cho