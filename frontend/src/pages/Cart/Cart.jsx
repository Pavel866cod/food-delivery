import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {

  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Продукт</p>
          <p>Название</p>
          <p>Цена</p>
          <p>Количество</p>
          <p>Общее</p>
          <p>Удалить</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₽{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₽{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
        <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>ЗАКАЗАТЬ</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>Если у вас есть промокод, введите его</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='Промокод' />
                <button>Готово</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
