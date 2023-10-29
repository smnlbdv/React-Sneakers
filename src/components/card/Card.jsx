import "./card.scss"

const Card = () => {
    return ( 
        <div className="card">
            <img className="card__image" src="/image/sneakers-1.jpg" alt="Sneakers" />
            <p className="card__title" >Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__description">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button-add">
                <img src="/icon/btn-add-plus.svg" alt="" />
              </button>
            </div>
        </div>
     );
}
 
export default Card;