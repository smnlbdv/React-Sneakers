/* eslint-disable react/prop-types */
import { useContext } from 'react'
import style from './basket-cart.module.scss'
import { Context } from '../../context.js'

const BasketCard = ({id, cart_item, imgUrl, title, price}) => {

    const {onRemoveItem} = useContext(Context)

    return ( 
        <div className={style.list__basket_item}>
            <div className={style.list__basket_image}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={style.list__basket_description}>
                <p>{title}</p>
                <b>{price} руб.</b>
            </div>
            <button onClick={() => onRemoveItem(id, cart_item)} className={style.list__basket_button} >
                <img src="/icon/cart-close-item.svg" alt="" />
            </button>
        </div>
     );
}
 
export default BasketCard;