import React from 'react'
import img1 from '../../IMG/lost vape ursa nano.jpg'
import img2 from '../../IMG/smoke pen.jpg'
import img3 from '../../IMG/centaurus quest.jpg'
import './Carrousel.css'

const Carousel = () => {
  return (
    <div className='body'>
    <div class="main_box">
        <div class="img img1">
            <p>Vapes</p>
        </div>
  
        <div class="img img2">
            <p>Resistencias</p>
        </div>
  
        <div class="img img3">
            <p>Baterias</p>
        </div>
  
        <div class="img img4">
            <p>Sabores</p>
        </div>
    </div>
    </div>
  )
}

export default Carousel