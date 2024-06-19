import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Служба доставки, основанная в 2024</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>КОМПАНИЯ</h2>
            <ul>
                <li>Главная</li>
                <li>О нас</li>
                <li>Доставка</li>
                <li>Политика</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>СВЯЗАТЬСЯ С НАМИ</h2>
            <ul>
                <li>+7-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Все права защищены. 2024</p>
    </div>
  )
}

export default Footer
