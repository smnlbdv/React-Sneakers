import style from "./card.module.scss"

const Card = () => {
    return ( 
        <div className={style.card}>
            <img className={style.image} src="/image/sneakers-1.jpg" alt="Sneakers" />
            <p className={style.title} >Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className={style.description }>
              <div className={style.price}>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className={style.button_add}>
                <img src="/icon/btn-add-plus.svg" alt="" />
              </button>
            </div>
        </div>
     );
}
 
export default Card;