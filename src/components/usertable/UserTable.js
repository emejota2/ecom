import React from 'react'
import './UserTable.css'

const UserTable = (props) => {
const {first_name, last_name, email, telephone, country} = props
  return (
    <div className='container mt-5 bodycard shadow  '>
      <div className="col-sm-12">
    <div className="">
      <div className="card-body">
        <h5 className="card-title">Detalle de orden</h5>
        <p className="card-text textocard ">id: {first_name}, order_id: {last_name}, product_brand: {email}, product_model: {telephone}, country: {country}</p>
       
      </div>
    </div>
  </div></div>
  )
}

export default UserTable