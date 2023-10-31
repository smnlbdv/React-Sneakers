/* eslint-disable react/prop-types */
import style from './search-input.module.scss'

const SearchBlock = ({searchItem, value}) => {
    return ( 
        <div className={style.search__block}>
            <img className={style.icon} src='/icon/search.svg'/>
            <input onChange={searchItem} className={style.input} value={value} type="text" placeholder='Поиск...'/>
        </div>
     );
}
 
export default SearchBlock;