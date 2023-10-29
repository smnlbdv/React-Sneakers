import './basket-cart.scss'

const BasketCard = () => {
    return ( 
        <div className="list__basket-item">
            <div className="list__basket-image">
                <img src="/image/cart-image-1.jpg" alt="" />
            </div>
            <div className="list__basket-description">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
            </div>
            <button className='list__basket-button'>
                <img src="/icon/btn-add-plus.svg" alt="" />
            </button>
        </div>
     );
}
 
export default BasketCard;