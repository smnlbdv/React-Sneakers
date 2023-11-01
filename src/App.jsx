import { useEffect, useState} from "react"
import Header from "./components/header/Header.jsx"
import SearchInput from "./components/search/SearchInput.jsx"
import Card from "./components/card/Card.jsx"
import Basket from "./components/basket/Basket.jsx"

import { Context } from "./context.js"

import axios from "axios"


function App() {

  const [items, setItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const body = document.body

  const clickCartIcon = () => {
    cartOpen ? body.style = 'overflow: auto;' : body.style = 'overflow: hidden;'
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    axios.get('https://6540d1ed45bedb25bfc2af59.mockapi.io/sneakers')
         .then(res => setItems(res.data))

    axios.get('https://6540d1ed45bedb25bfc2af59.mockapi.io/cart')
         .then(res => setCartItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6540d1ed45bedb25bfc2af59.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const functionCart = {
    onRemoveItem,
    clickCartIcon
  };

  return (
    <div className='wrapper clear'>

      <Context.Provider value={functionCart}>
          {cartOpen && <Basket items = {cartItems}/>}
      </Context.Provider>

      <Header clickCartIcon = {clickCartIcon} />

      <section className="slider__section"></section>

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
