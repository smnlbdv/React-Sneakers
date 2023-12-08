/* eslint-disable react/prop-types */
import SearchInput from "../components/search/SearchInput.jsx"
import Card from "../components/card/Card.jsx"
import NullCart from "../components/null-cart/NullCart.jsx";

const Favorites = ({onChangeSearch, searchValue, favoriteItems = [], onAddToCart, addNewFavorite}) => {
    return ( 
        <section className="sneakers__section">
            {
            favoriteItems.length > 0 ?
                <>
                    <div className="header__section">

                        <h1 className="title-section">Мои закладки</h1>

                        <SearchInput searchItem = {onChangeSearch} value = {searchValue}/>

                        </div>

                        <div className="sneakers__list">

                        {
                            favoriteItems
                            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((obj, index) => (
                            <Card 
                                key = {index}
                                onPlus={(obj) => onAddToCart(obj)}
                                onFavorite = {(obj) => addNewFavorite(obj)}
                                loading = {false}
                                {...obj}
                            />
                            ))
                        }

                    </div>
                </>
            :
            ( <NullCart
                title={"Закладок нет :("} 
                description={"Вы ничего не добавляли в закладки"} 
                image={"./image/favorite-null.png"}
                mainLink
                />
            )}

        </section>
     );
}
 
export default Favorites ;