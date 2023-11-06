/* eslint-disable react/prop-types */
import style from './null-cart.module.scss'
import {Link} from 'react-router-dom'

import { useContext } from 'react'
import { Context } from '../../context.js'

export default function NullCart({image, title, description, mainLink}){

    const {clickCartIcon} = useContext(Context)

    return ( 
        <div className={style.block__null}>
            <img className={style.null__img} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>

            {mainLink ? 
                <Link to="/">
                    <button className={[style.green__button, style.revers].join(' ')}>
                        Вернуться назад
                        <img className={style.img__green__button} src="/icon/line-null.svg" alt="line-btn"/>
                    </button>
                </Link> 
            : 
                <button onClick={clickCartIcon} className={[style.green__button, style.revers].join(' ')}>
                    Вернуться назад
                    <img className={style.img__green__button} src="/icon/line-null.svg" alt="line-btn"/>
                </button>
            }
        </div>
    );
}
