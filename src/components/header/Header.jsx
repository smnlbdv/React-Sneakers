/* eslint-disable react/prop-types */
import { useContext } from 'react';
import style from './header.module.scss'
import {Link} from 'react-router-dom'
import { Context } from '../../context.js'

const Header = (props) => {

    const {cartItems} = useContext(Context)

    const totalPrice = cartItems.reduce((sum, obj) => sum + Number(obj.price), 0)

    return ( 
        <header className={style.header}>
            <Link to="/">
                <div className={style.header__logo}>
                        <img className={style.header__image} src="/icon/logo.svg" alt="logo" />
                        <div className="header__text">
                            <h3 className={style.text__title}>React Apple</h3>
                            <p className={style.text__description}>Магазин лучшей техники</p>
                        </div>
                </div>
            </Link> 
            <nav className={style.navigation}>
                <ul className={style.list__navigation}>
                    
                    <li className={style.list__item} onClick={props.clickCartIcon}>
                        <img className={style.list__image} src="/icon/cart.svg" alt="Cart" />
                        <p className={[style.list__text, style.text__cart].join(' ')}>${totalPrice}</p>
                    </li>
                    <Link to="/favorites">
                        <li className={style.list__item}>
                            <img className={style.list__image} src="/icon/love-sneakers.svg" alt="Love sneakers" />
                            <p className={style.list__text}>Закладки</p>
                        </li>
                    </Link>
                    <li className={style.list__item}>
                        <img className={style.list__image} src="/icon/user.svg" alt="User" />
                        <p className={style.list__text}>Профиль</p>
                    </li>
                    
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;