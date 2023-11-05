/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import style from "./card.module.scss";
import ContentLoader from "react-content-loader";
import { Context } from '../../context.js'

function Card({
  id,
  imgUrl,
  title,
  price,
  onPlus,
  onFavorite,
  loading = true,
}) {
  
  const {isItemAdded, isItemFavorite} = useContext(Context)
  
  const handleClick = () => {
    onPlus({ cart_item: id, imgUrl, title, price });
  };

  const loveClick = () => {
    onFavorite({ id, imgUrl, title, price });
  };

  return (
    <div className={style.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="101" y="9" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="100" rx="3" ry="3" width="150" height="15" />
          <rect x="5" y="123" rx="3" ry="3" width="93" height="15" />
          <rect x="116" y="149" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={style.block_image}>
            <img className={style.image} src={imgUrl} alt="Sneakers" />
            <img
              className={style.img_favorite}
              src={
                isItemFavorite(id)
                  ? "/icon/favorite-love-red.svg"
                  : "/icon/favorite-love.svg"
              }
              alt=""
              onClick={loveClick}
            />
          </div>
          <p className={style.title}>{title}</p>
          <div className={style.description}>
            <div className={style.price}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={style.image_add}
              onClick={handleClick}
              src={
                isItemAdded(id)
                  ? "/icon/btn-add-plus-check.svg"
                  : "/icon/btn-add-plus.svg"
              }
              alt="addIcon"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
