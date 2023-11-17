/* eslint-disable react/prop-types */
import { useContext } from "react";
import style from "./card.module.scss";
import ContentLoader from "react-content-loader";
import { Context } from '../../context.js'

function Card({
  id,
  imgUrl,
  title,
  price,
  color,
  onPlus,
  onFavorite,
  loading = true,
}) {
  
  const {isItemAdded, isItemFavorite} = useContext(Context)
  
  const handleClick = () => {
    onPlus({ cartItem: id, imgUrl, title, price });
  };

  const loveClick = () => {
    onFavorite({ id, imgUrl, title, price });
  };

  return (
    <div className={style.card} style={{background: `linear-gradient(0deg, #fff 30%, ${color} 100%)`}}>
      {loading ? (
      <ContentLoader 
      speed={2}
      width={193}
      height={300}
      viewBox="0 0 193 300"
      backgroundColor="#e9e7e8"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="4" ry="4" width="192" height="178" /> 
      <rect x="0" y="212" rx="2" ry="2" width="29" height="16" /> 
      <rect x="0" y="236" rx="3" ry="3" width="101" height="16" /> 
      <rect x="0" y="266" rx="2" ry="2" width="36" height="12" /> 
      <rect x="0" y="283" rx="2" ry="2" width="36" height="16" /> 
      <rect x="26" y="454" rx="6" ry="6" width="31" height="31" /> 
      <rect x="158" y="268" rx="6" ry="6" width="30" height="30" /> 
      <circle cx="102" cy="200" r="9" /> 
      <rect x="22" y="519" rx="6" ry="6" width="30" height="30" /> 
      <rect x="120" y="268" rx="6" ry="6" width="30" height="30" />
    </ContentLoader>
      ) : (
        <>
          <div className={style.block_image}>
            <img className={style.image} src={imgUrl} alt="Sneakers" />
          </div>
          <div className={style.color_circle}>
            <div className={style.circle} style={ {backgroundColor: color}}></div>
          </div>
          <span className={style.span_new}>New</span>
          <p className={style.title}>{title}</p>
          <div className={style.description}>
            <div className={style.price}>
              <span>Цена:</span>
              <b>${price}</b>
            </div>
            <div>
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
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
