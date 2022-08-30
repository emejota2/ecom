import React from 'react'
import './Seccion.css'
import { Link } from 'react-router-dom'

const Seccion = () => {
  return (
    <div className="hero-section">
  <div className="card-grid my-5">
    <Link className="card me-3" to='/'>
      <div className="card__background imgSec"></div>
      <div className="card__content">
        <h3 className="card__heading">MAS VENDIDOS</h3>
      </div>
    </Link>
    <Link className="card me-3" to='/'>
      <div className="card__background imgSec2" ></div>
      <div className="card__content">
        <h3 className="card__heading">NUEVOS PRODUCTOS</h3>
      </div>
    </Link>
    <Link className="card" to='/'>
      <div className="card__background imgSec3" ></div>
      <div className="card__content">
        <h3 className="card__heading">HIGHLIGHT</h3>
      </div>
    </Link>
  </div>
</div>
  )
}

export default Seccion