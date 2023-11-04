/* eslint-disable react/prop-types */
import style from './null-cart.module.scss'

import { useContext } from 'react'
import { Context } from '../../context.js'

export default function NullCart({image, title, description}){

    const {clickCartIcon} = useContext(Context)

    return ( 
        <div className={style.block__null}>
            <img className={style.null__img} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={clickCartIcon} className={[style.green__button, style.revers].join(' ')}>
                Вернуться назад
                <img className={style.img__green__button} src="/icon/line-null.svg" alt="line-btn"/>
            </button>
        </div>
    );
}
