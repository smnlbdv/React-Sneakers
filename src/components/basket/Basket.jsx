/* eslint-disable react/prop-types */
import style from './basket.module.scss'

import BasketCard from '../basket-card/BasketCard';
import GreenBtn from '../green-button/GreenBtn';
import NullCart from '../null-cart/NullCart';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context.js'

const Basket = ({items = []}) => {
    
    const {clickCartIcon} = useContext(Context)
    // const [price, setPrice] = useState(null)

    // useEffect(() => {
    //     setPrice(calcTotal())
    // }, [items])

    // let count = 0

    // function calcTotal() {
    //     if(items.length !== 0) {
    //         items.forEach(element => {
    //             count += element.price
    //         });
    //     }
    //     return count
    // }

    return ( 
        <div className={style.view__basket}>

            <div className={style.basket}>
                
                <div className={style.basket__header}>
                    <h3 className="basket__title">Корзина</h3>
                    <button onClick={clickCartIcon}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                        </svg>
                    </button>
                </div>

                {
                    items.length > 0 ? (
                        <>
                            <div className={style.list__basket}>

                                {
                                    items.map((obj, index) => (
                                        <BasketCard 
                                            key = {index}
                                            id={obj.id}
                                            imgUrl = {obj.imgUrl}
                                            title = {obj.title}
                                            price = {obj.price}
                                        />
                                    ))
                                }

                            </div>

                            <div className={style.total_block}>

                                <div className={style.price}>
                                    <p>Итого:</p>
                                    <span></span>
                                    <p className={style.price_bold}>21 222 руб.</p>
                                </div>

                                <div className={style.price}>
                                    <p>Налог 5%:</p>
                                    <span></span>
                                    <p className={style.price_bold}>1074 руб.</p>
                                </div>

                                <GreenBtn title = {"Оформить заказ"}/>
                                    
                            </div>
                        </> 
                    )
                    : 
                    ( <NullCart /> )
                }

            </div>

        </div>
     );
}
 
export default Basket;