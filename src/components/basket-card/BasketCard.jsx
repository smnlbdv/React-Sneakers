/* eslint-disable react/prop-types */
import style from './basket-cart.module.scss'

const BasketCard = ({imgUrl, title, price}) => {
    return ( 
        <div className={style.list__basket_item}>
            <div className={style.list__basket_image}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={style.list__basket_description}>
                <p>{title}</p>
                <b>{price}</b>
            </div>
            <button className={style.list__basket_button}>
                <img src="/icon/cart-close-item.svg" alt="" />
            </button>
        </div>
     );
}
 
export default BasketCard;