/* eslint-disable react/prop-types */
import style from './header.module.scss'

const Header = (props) => {
    return ( 
        <header className={style.header}>
            <div className={style.header__logo}>
                <img className={style.header__image} src="/icon/logo.svg" alt="logo" />
                <div className="header__text">
                    <h3 className={style.text__title}>REACT SNEAKERS</h3>
                    <p className={style.text__description}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <nav className={style.navigation}>
                <ul className={style.list__navigation}>
                    <li className={style.list__item} onClick={props.clickCartIcon}>
                        <img className={style.list__image} src="/icon/cart.svg" alt="Cart" />
                        <p className={[style.list__text, style.text__cart].join(' ')}>1205 руб.</p>
                    </li>
                    <li className={style.list__item}>
                        <img className={style.list__image} src="/icon/love-sneakers.svg" alt="Love sneakers" />
                        <p className={style.list__text}>Закладки</p>
                    </li>
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