import React, { useContext } from 'react'
import CardVideo from '../../components/cardVideo/CardVideo'
import Carousel from '../../components/Carrousel/Carousel'
import Modals from '../../components/Modal/Modal'
import Seccion from '../../components/Secciones/Seccion'
import { Context } from '../../Store/Store'

const Home = () => {
  const {edad} = useContext(Context)
  return (
    <div>
      {
        edad===false?<Modals/>:''
      }
        <Carousel />
        <Seccion />
        <CardVideo/>
        
    </div>
  )
}

export default Home