/* eslint-disable react/prop-types */
import SearchInput from "../components/search/SearchInput.jsx"
import Card from "../components/card/Card.jsx"

const Favorites = ({onChangeSearch, searchValue, favoriteItems = [], onAddToCart, addNewFavorite}) => {
    return ( 
        <section className="sneakers__section">
        
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
                        imgUrl = {obj.imgUrl}
                        title = {obj.title}
                        price = {obj.price}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite = {(obj) => addNewFavorite(obj)}
                        favorite
                        isLoading = {false}
                    />
                    ))
                }
                
            </div>

        </section>
     );
}
 
export default Favorites ;