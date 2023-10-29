import './header.scss'

const Header = () => {
    return ( 
        <header className='header'>
            <div className="header__logo">
                <img className='header__image' src="/icon/logo.svg" alt="logo" />
                <div className="header__text">
                    <h3 className="text-title">REACT SNEAKERS</h3>
                    <p className="text-description">Магазин лучших кроссовок</p>
                </div>
            </div>
            <nav className="header__navigation">
                <ul className='list__navigation'>
                    <li className='list__navigation-item'>
                        <img className='list__navigation-image' src="/icon/cart.svg" alt="Cart" />
                        <p className='list__navigation-text text-cart'>1205 руб.</p>
                    </li>
                    <li className='list__navigation-item'>
                        <img className='list__navigation-image' src="/icon/love-sneakers.svg" alt="Love sneakers" />
                        <p className='list__navigation-text'>Закладки</p>
                    </li>
                    <li className='list__navigation-item'>
                        <img className='list__navigation-image' src="/icon/user.svg" alt="User" />
                        <p className='list__navigation-text'>Профиль</p>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;