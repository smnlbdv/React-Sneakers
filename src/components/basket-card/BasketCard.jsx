import style from './basket-cart.module.scss'

const BasketCard = () => {
    return ( 
        <div className={style.list__basket_item}>
            <div className={style.list__basket_image}>
                <img src="/image/cart-image-1.jpg" alt="" />
            </div>
            <div className={style.list__basket_description}>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
            </div>
            <button className={style.list__basket_button}>
                <img src="/icon/btn-add-plus.svg" alt="" />
            </button>
        </div>
     );
}
 
export default BasketCard;