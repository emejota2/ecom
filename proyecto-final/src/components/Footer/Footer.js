import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div><link to="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    <footer className="footer_area section_padding_130_0 bg">
          <div className="container">
            <div className="row">
              
              <div className="col-12 col-sm-6 col-lg-4 pb-3">
                <div className="single-footer-widget section_padding_0_130">
                  <div className="footer_social_area">
                    <Link to='/' data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></Link>
                    <Link to='/' data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></Link>
                    <Link to='/' data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i className="fa fa-skype"></i></Link>
                    <Link to='/' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="fa fa-twitter"></i></Link>
                    </div>
                </div>
              </div>
             
              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130 pb-3">
                 
                  <h5 className="widget-title">About</h5>
                 
                  <div className="footer_menu">
                    <ul>
                      <li><Link to='/'>About Us</Link></li>
                      <li><Link to='/'>Corporate Sale</Link></li>
                      <li><Link to='/'>Terms &amp; Policy</Link></li>
                      <li><Link to='/'>Community</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
             
              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130 pb-3">
                 
                  <h5 className="widget-title">Productos</h5>
                 
                  <div className="footer_menu">
                    <ul>
                      <li><Link to='/'>Vapes</Link></li>
                      <li><Link to='/'>Baterias</Link></li>
                      <li><Link to='/'>Resistencias</Link></li>
                      <li><Link to='/'>Sabores</Link></li>
                      <li><Link to='/'>Tanques</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-sm-6 col-lg">
                <div className="single-footer-widget section_padding_0_130 pb-3">
                  
                  <h5 className="widget-title">Contacto</h5>
                
                  <div className="footer_menu">
                    <ul>
                      <li><Link to='/'> +58123334</Link></li>
                      <li><Link to='/'>Proyecto@pdtc.com</Link></li>
                      <li><Link to='/'>Term &amp; Conditions</Link></li>
                      <li><Link to='/'>Help Center</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
  )
}

export default Footer