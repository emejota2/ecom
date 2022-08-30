import React from 'react'
import CardVideo from '../../components/cardVideo/CardVideo'
import Carousel from '../../components/Carrousel/Carousel'
import Modals from '../../components/Modal/Modal'
import Seccion from '../../components/Secciones/Seccion'

const Home = () => {
  return (
    <div>
        <Carousel />
        <Seccion />
        <CardVideo/>
        <Modals/>
        
    </div>
  )
}

export default Home