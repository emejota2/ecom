import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../Store/Store';
import './CardFav.css'

const CardFav = (props) => {
    const {borrarfav, cartAdd} = useContext(Context)
    const {brand, model, price, image, information, id, vape} = props
    

    return (
      <div>
        <div className="product-card">
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <Link to="/"><img src={image} alt="" /></Link>
          </div>
          <div className="product-details">
            <span className="product-catagory">{brand}</span>
            <h4>
              <Link to="/vape">{model}</Link>
            </h4>
            <h4 className="info">
              {information}
            </h4>
            <div className="product-bottom-details">
              <div className="product-price">
               Precio: {price}$
              </div>
              <div className="product-links">
              <button  className='fav me-4' onClick={()=>(borrarfav(id))}><span role='img' > 💔 </span></button>
              <button className='fav' onClick={() => cartAdd(vape) }> <i className="bi bi-cart"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardFav