import React from 'react'

const ProductTable = (props) => {

    const {brand, description, id, information, model, price, stock} = props
  return (
    <div className='container mt-5 bodycard shadow  '>
      <div className="col-sm-12">
    <div className="">
      <div className="card-body">
        <h5 className="card-title">Detalle de orden</h5>
        <p className="card-text textocard ">id: {id}, brand: {brand}, description: {description}, information: {information}, model: {model}, price:{price}, stock:{stock}</p>
        {/* <button className="btn " onClick={()=>ordenes(id)} data-toggle='modal' data-target='#ventanamodal'>Ver detalles</button> */}
      </div>
    </div>
  </div></div>
  )
}

export default ProductTable