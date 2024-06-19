import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='Информация о доставке'></p>
        <div className="multi-fields">
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Отчество' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Область' />
        <div className="multi-fields">
            <input type="text" placeholder='Город' />
            <input type="text" placeholder='Улица' />
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Дом' />
            <input type="text" placeholder='Квартира' />
        </div>
        <input type="text" placeholder='Телефон' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Всего в корзине</h2>
            <div>
            <div className="cart-total-details">
                  <p>В общем</p>
                  <p>₽{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <p>Доставка</p>
                  <p>₽{getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <b>Итого</b>
                  <b>₽{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button>ПЕРЕЙТИ К ОПЛАТЕ</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
