import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    
    const [Меню,setMenu] = useState("Меню");

    const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Главная")} className={Меню==="Главная"?"active":""}>Главная</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Меню")} className={Меню==="Меню"?"active":""}>Меню</a>
        <a href='#footer' onClick={()=>setMenu("Контакты")} className={Меню==="Контакты"?"active":""}>Контакты</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Войти</button>
      </div>
    </div>
  )
}

export default Navbar
