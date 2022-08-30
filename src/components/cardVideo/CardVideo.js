import React from 'react'
import './CardVideo.css'

const CardVideo = () => {
  return (
    <div className='cardvid '>
        <h2 className='vap text-center pt-5 '>VAPE COMMUNITY</h2>
    <div className='video-responsive d-flex flex-grap justify-content-around align-items-center'>
        <iframe className='vid shadow'  src="https://www.youtube.com/embed/U-RL3yJbrKM" title="LOST VAPE URSA BABY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className='vid shadow'  src="https://www.youtube.com/embed/RsIS-rYFby0" title="Luxe X by Vaporesso!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className='vid shadow'  src="https://www.youtube.com/embed/wDltvLCgBEM" title="Centaurus Q200 by Lost Vape!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className='vid shadow' src="https://www.youtube.com/embed/ap7HWeuwkBo" title="The BEST Nord to Date? Smok Nord 4 Kit Review! VapingwithTwisted420" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    
  )
}

export default CardVideo