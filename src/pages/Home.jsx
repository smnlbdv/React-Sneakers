/* eslint-disable react/prop-types */
import SearchInput from "../components/search/SearchInput.jsx"
import Card from "../components/card/Card.jsx"

const Home = ({items = [], onAddToCart, onChangeSearch, addNewFavorite, searchValue, isLoading}) => {

    const renderItems = () => {

        const filterItems = items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? [...Array(7)] : filterItems).map((obj, index) => (
            <Card
                key = {index}
                loading={isLoading}
                onFavorite = {(obj) => addNewFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...obj}
            />
        ))
    }

    return ( 
        <section className="sneakers__section">
        
            <div className="header__section">
            <h1 className="title-section" >Все товары</h1>

            <SearchInput searchItem = {onChangeSearch} value = {searchValue}/>

            </div>

            <div className="sneakers__list">

            {
                renderItems()
            }

            </div>

        </section>
     );
}
 
export default Home;