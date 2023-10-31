/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./card.module.scss";

function Card({imgUrl, title, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  };

  

  return (
    <div className={style.card}>
      <div className={style.block_image}>
        <img className={style.image} src={imgUrl} alt="Sneakers" />
        <img
          className={style.img_favorite}
          src="/icon/favorite-love.svg"
          alt=""
          onClick={onFavorite}
        />
      </div>
      <p className={style.title}>{title}</p>
      <div className={style.description}>
        <div className={style.price}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={style.image_add}
          onClick={handleClick}
          src={
            isAdded ? "/icon/btn-add-plus-check.svg" : "/icon/btn-add-plus.svg"
          }
          alt="addIcon"
        />
      </div>
    </div>
  );
}

export default Card;
