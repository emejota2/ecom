import React from 'react'

import './Navbar.css'
import logo from '../../img/1659900393707.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
  <div className="container-fluid">
    <img src={logo} alt='logo' className='logo ms-3'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse btn-group mx-auto" id="navbarSupportedContent">
      <ul className="navbar-nav btn-group mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">VAPES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">COILS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ACCESORIOS
          </a>
          <ul className="dropdown-menu bg-dark dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Sabores</a></li>
            <li><a className="dropdown-item" href="#">Tanques</a></li>
            <li><a className="dropdown-item" href="#">Baterias</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item me-3">
            <a className="nav-link active" href='#'>
            <i className="bi bi-heart"></i>
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active" href='#'>
            <i className="bi bi-cart2"></i>
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active" href='#'>
            <i className="bi bi-person"></i>
            </a>
          </li>
        </ul>
      
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar