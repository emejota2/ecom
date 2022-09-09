import React from 'react'
import { Link } from 'react-router-dom'
import './Carrousel.css'

const Carousel = () => {
  return (
    <div className='body mt-5'>
    <div className="main_box mt-5">
        <div className="img img1">
           <Link to="/vapes"><p className='p'>Vapes</p></Link> 
        </div>
  
        <div className="img img2">
        <Link to="/coils"><p className='p'>Resistencias</p></Link> 
        </div>
  
        <div className="img img3">
        <Link to="/sabores"><p className='p'>Sabores</p></Link> 
        </div>
  
    </div>
    </div>
  )
}

export default Carousel