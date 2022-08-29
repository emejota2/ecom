import React from 'react'
import './Seccion.css'
import img1 from '../../img/lost vape ursa nano.jpg'
import img2 from '../../img/smoke pen.jpg'
import img3 from '../../img/centaurus quest.jpg'

const Seccion = () => {
  return (
    <div class="hero-section">
  <div class="card-grid">
    <a class="card" href="#">
      <div class="card__background imgSec"></div>
      <div class="card__content">
        <h3 class="card__heading">MAS VENDIDOS</h3>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card__background imgSec2" ></div>
      <div class="card__content">
        <h3 class="card__heading">NUEVOS PRODUCTOS</h3>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card__background imgSec3" ></div>
      <div class="card__content">
        <h3 class="card__heading">HIGHLIGHT</h3>
      </div>
    </a>
  </div>
</div>
  )
}

export default Seccion