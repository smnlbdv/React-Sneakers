
import Header from "./components/header/Header.jsx"
import SearchInput from "./components/search/SearchInput.jsx"
import Card from "./components/card/Card.jsx"
import Basket from "./components/basket/Basket.jsx"

function App() {
  return (
    <div className='wrapper clear'>

      <Basket />

      <Header />

      <section className="slider__section"></section>

      <section className="sneakers__section">
        
        <div className="header__section">
          <h1 className="title-section" >Все кроссовки</h1>
          <SearchInput />
        </div>

        <div className="sneakers__list">
          
          <Card />
          
        </div>

      </section>
    </div>
  )
}

export default App
