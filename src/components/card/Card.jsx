/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./card.module.scss";

function Card({imgUrl, title, price, onPlus, onFavorite, favorite = false}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);


  const handleClick = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  };

  const loveClick = () => {
    onFavorite({imgUrl, title, price})
    setIsFavorite(!isFavorite);
  };

  

  return (
    <div className={style.card}>
      <div className={style.block_image}>
        <img className={style.image} src={imgUrl} alt="Sneakers" />
        <img
          className={style.img_favorite}
          src={isFavorite ? "/icon/favorite-love-red.svg" : "/icon/favorite-love.svg"}
          alt=""
          onClick={loveClick}
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
