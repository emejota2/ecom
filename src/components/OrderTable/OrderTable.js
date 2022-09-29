import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import OrderModal from '../OrderModal/OrderModal'
import './OrderTable.css'

export const OrderTable = (props) => {
  
  const {orders, ordenes} = useContext(Context)
  const {id, order_id, product_brand, product_model, quantity} = props
  


  return (
    <div className='container mt-5 bodycard shadow  '>
      <div className="col-sm-12">
    <div className="">
      <div className="card-body">
        <h5 className="card-title">Detalle de orden</h5>
        <p className="card-text textocard ">id: {id}, order_id: {order_id}, product_brand: {product_brand}, product_model: {product_model}, quantity: {quantity}</p>
        <button className="btn " onClick={()=>ordenes(id)} data-toggle='modal' data-target='#ventanamodal'>Ver detalles</button>
      </div>
    </div>
  </div></div>
  )
}

export default OrderTable