import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Войти")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Войти"?<></>:<input type="text" placeholder='Введите имя' required />}
                <input type="email" placeholder='Введите почтовый адрес' required />
                <input type="password" placeholder='Введите пароль' required />
            </div>
            <button>{currState==="Создать"?"Войти":"Войти"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>Продолжая, я соглашаюсь с условиями политики конфиденциальности</p>
            </div>
            {currState==="Войти"
            ?<p>Создать новый аккаунт? <span onClick={()=>setCurrState("Создать")}>Создать</span></p>
            :<p>Аккаунт уже существует? <span onClick={()=>setCurrState("Войти")}>Войти</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup
