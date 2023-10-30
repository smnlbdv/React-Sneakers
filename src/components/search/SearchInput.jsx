import style from './search-input.module.scss'

const SearchBlock = () => {
    return ( 
        <div className={style.search__block}>
            <img className={style.icon} src='/icon/search.svg'/>
            <input className={style.input} type="text" placeholder='Поиск...'/>
        </div>
     );
}
 
export default SearchBlock;