import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = () => {
  return (
    <div><div class="product-card">
    <div class="badge">Hot</div>
    <div class="product-tumb">
        <img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
    </div>
    <div class="product-details">
        <span class="product-catagory">Women,bag</span>
        <h4><Link to="">Women leather bag</Link></h4>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</h4>
        <div class="product-bottom-details">
            <div class="product-price"><small>$96.00</small>$230.99</div>
            <div class="product-links">
                <Link to=""><i class="fa fa-heart"></i></Link>
                <Link to=""><i class="fa fa-shopping-cart"></i></Link>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Card