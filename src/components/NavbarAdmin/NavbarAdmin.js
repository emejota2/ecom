import React from 'react'
import './NavbarAdmin.css'

const NavbarAdmin = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        
      <span className="fs-4">Sidebar</span>
    </a>
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
            <i className="bi bi-house-door"> Home</i>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2"> Dashboard</i>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
            <i className="bi bi-table"> Orders</i>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
            <i className="bi bi-grid"> Products</i>
        </a>
      </li>
      <li>
      <li class="mb-1">
        <button class="btn align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <i class="bi bi-person-circle"> Customers</i>
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="text-white rounded">New</a></li>
            <li><a href="#" class="text-white rounded">Processed</a></li>
            <li><a href="#" class="text-white rounded">Shipped</a></li>
            <li><a href="#" class="text-white rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      </li>
    </ul>
    
  </div>
        
  )
}

export default NavbarAdmin