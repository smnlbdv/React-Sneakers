import Header from "./components/header/Header.jsx"
import SearchInput from "./components/search/SearchInput.jsx"
import Card from "./components/card/Card.jsx"
import Basket from "./components/basket/Basket.jsx"
import { useEffect, useState } from "react"


function App() {

  const [items, setItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const body = document.body

  const clickCartIcon = () => {
    cartOpen ? body.style = 'overflow: auto;' : body.style = 'overflow: hidden;'
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    fetch('https://6540d1ed45bedb25bfc2af59.mockapi.io/sneakers')
      .then(item => item.json())
      .then(data => setItems(data))
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className='wrapper clear'>

      {cartOpen && <Basket onClose = {clickCartIcon} items = {cartItems} />}

      <Header clickCartIcon = {clickCartIcon} />

      <section className="slider__section"></section>

      <section className="sneakers__section">
        
        <div className="header__section">
          <h1 className="title-section" >Все кроссовки</h1>
          <SearchInput />
        </div>

        <div className="sneakers__list">

          {
            items.map((obj, index) => (
              <Card 
                key = {index}
                imgUrl = {obj.imgUrl}
                title = {obj.title}
                price = {obj.price}
                onFavorite = {() => console.log('favorite')}
                onPlus={onAddToCart}
              />
            ))
          }

        </div>

      </section>
    </div>
  )
}

export default App
