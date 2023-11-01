import style from './null-cart.module.scss'
import GreenBtn from '../green-button/GreenBtn';
import { useContext } from 'react'
import { Context } from '../../context.js'

export default function NullCart(){

    const {clickCartIcon} = useContext(Context)

    return ( 
        <div className={style.block__null}>
            <img className={style.null__img} src="./image/cart-null.png" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <GreenBtn onCloseCart = {clickCartIcon} title = {"Вернуться назад"} styles = {true} />
        </div>
    );
}
