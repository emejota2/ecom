import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
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
          <Link className="nav-link active" aria-current="page" to='/vapes'>VAPES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/'>COILS</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle active ms-4" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ACCESORIOS
          </Link>
          <ul className="dropdown-menu bg-dark dropdown-menu-dark">
            <li><Link className="dropdown-item" to='/'>Sabores</Link></li>
            <li><Link className="dropdown-item" to='/'>Tanques</Link></li>
            <li><Link className="dropdown-item" to='/'>Baterias</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item me-3">
            <Link className="nav-link active" to='/'>
            <i className="bi bi-heart"></i>
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link active" to='/'>
            <i className="bi bi-cart2"></i>
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link active" to='/loggin'>
            <i className="bi bi-person"></i>
            </Link>
          </li>
        </ul>
      
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar