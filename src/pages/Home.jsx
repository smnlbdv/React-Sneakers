/* eslint-disable react/prop-types */
import SearchInput from "../components/search/SearchInput.jsx"
import Card from "../components/card/Card.jsx"

const Home = ({items = [], onAddToCart, onChangeSearch, addNewFavorite, searchValue}) => {
    return ( 
        <section className="sneakers__section">
        
            <div className="header__section">
            <h1 className="title-section" >Все кроссовки</h1>

            <SearchInput searchItem = {onChangeSearch} value = {searchValue}/>

            </div>

            <div className="sneakers__list">

            {
                items
                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => (
                <Card 
                    key = {index}
                    imgUrl = {obj.imgUrl}
                    title = {obj.title}
                    price = {obj.price}
                    onFavorite = {(obj) => addNewFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                />
                ))
            }

            </div>

        </section>
     );
}
 
export default Home;