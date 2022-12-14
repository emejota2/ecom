import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import NewProduct from '../NewProduct/NewProduct'
import UpProduct from '../UpdateProduct/UpProduct'
import './NavbarAdmin.css'

const NavbarAdmin = () => {
  const {getallusers, getorderDetails, obtenerdatos, setOrderDetails, getorders, setProducto, removeCookie, setOrders, setAllusers, status, setStatus} = useContext(Context)

  const home = ()=>{
    setStatus(null)
    setOrderDetails([])
    setProducto([])
    setOrders([])
    setAllusers([])
  }
  const funcion = () =>{
    setOrderDetails([])
    obtenerdatos()
  }

  const order = () =>{
    getorderDetails()
    getorders()
  }
  const fun = () =>{
    
    <NewProduct/>
    setStatus(true)
    setOrderDetails([])
    setProducto([])
    setOrders([])
    setAllusers([])
    
  }
  const getuser = () =>{
    setProducto([])
    setOrderDetails([])
    getallusers()
    
  }

  const acPro = () =>{

    <UpProduct/>;
    setStatus(false)
    setAllusers([])
    setOrderDetails([])
    setOrders([])
    setProducto([])
    
  }
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        
      <span className="fs-4">Administrador</span>
    </Link>
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="#" className="nav-link   mt-5" aria-current="page">
            <i className="bi bi-house-door mb-1" onClick={home}> Home</i>
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white mb-1">
            <i className="bi bi-speedometer2"> Dashboard</i>
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white mb-1">
            <i className="bi bi-table" onClick={order}> Orders</i>
        </Link>
      </li>
      <li>
      <li className="mb-1">
        <button className="btn   collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse1" aria-expanded="false">
        <i className="bi bi-person-circle" onClick={funcion}> Productos </i>
        </button>
        <div className="collapse" id="orders-collapse1">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="text-white rounded" onClick={fun}>New</Link></li>
            <li><Link to="#" className="text-white rounded" onClick={acPro}>Actualizar</Link></li>
            
          </ul>
        </div>
      </li>
      </li>
      
      <li>
      <li className="mb-1">
        <button className="btn   collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <i className="bi bi-person-circle"> Customers</i>
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="text-white rounded" onClick={getuser}>all</Link></li>
            <li><Link to="#" className="text-white rounded">update</Link></li>
          </ul>
        </div>
      </li>
      </li>
      <li>
        <Link to="#" className="nav-link text-white mb-3">
            <i className="" onClick={removeCookie}>Logout</i>
        </Link>
      </li>
    </ul>
    
  </div>
        
  )
}

export default NavbarAdmin