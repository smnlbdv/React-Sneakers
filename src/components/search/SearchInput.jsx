import './search-input.scss'

const SearchBlock = () => {
    return ( 
        <div className="search__block">
            <img className="search__block-icon" src='/icon/search.svg'/>
            <input className="search__block-input" type="text" placeholder='Поиск...'/>
        </div>
     );
}
 
export default SearchBlock;