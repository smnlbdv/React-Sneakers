import { useEffect, useState} from "react"
import { Route, Routes } from 'react-router-dom'
import { Context } from "./context.js"


import Header from "./components/header/Header.jsx"
import Basket from "./components/basket/Basket.jsx"
import Home from "./pages/Home.jsx"

import axios from "axios"
import Favorites from "./pages/Favorites.jsx"


function App() {

  const [items, setItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favoriteItems, setFavoriteItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const body = document.body

  const clickCartIcon = () => {
    cartOpen ? body.style = 'overflow: auto;' : body.style = 'overflow: hidden;'
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    async function fetchData () {

      setIsLoading(true)

      const cartRepsonse = await axios.get('https://6540d1ed45bedb25bfc2af59.mockapi.io/cart')
      const itemsRepsonse = await axios.get('https://6540d1ed45bedb25bfc2af59.mockapi.io/sneakers')

      setIsLoading(false)

      setItems(itemsRepsonse.data)
      setCartItems(cartRepsonse.data)

    }
    
    fetchData()

  }, [])

  const onAddToCart = (obj) => {
    try {
      if(cartItems.find(item => Number(item.id) == Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) != Number(obj.id)))
        axios.delete(`https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${Number(obj.id)}`)
      } else {
        axios.post('https://6540d1ed45bedb25bfc2af59.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {
      alert(error)
    }
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveItem = (id, title) => {
    try {
      axios.delete(`https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => item.title != title))
    } catch (error) {
      alert(error)
    }
  }

  const functionCart = {
    onRemoveItem,
    clickCartIcon
  };

  const addNewFavorite = (obj) => {
    if(favoriteItems.find(item => item.title === obj.title)) {
      setFavoriteItems((prev) => prev.filter(item => item.title !== obj.title))
    } else {
      setFavoriteItems(prev => [...prev, obj])
    }
  }

  return (
    <div className='wrapper clear'>

      <Context.Provider value={functionCart}>
          {cartOpen && <Basket items = {cartItems}/>}
      </Context.Provider>

      <Header clickCartIcon = {clickCartIcon} />

      <section className="slider__section"></section>

      <Routes>
        <Route path="/" element={
          <Home 
            items = {items} 
            cartItems = {cartItems}
            onAddToCart = {onAddToCart} 
            onChangeSearch={onChangeSearch} 
            addNewFavorite={addNewFavorite} 
            searchValue={searchValue}
            isLoading={isLoading}/>
          }>
        </Route>
        <Route path="/favorites" element={
          <Favorites 
            onChangeSearch={onChangeSearch} 
            searchValue={searchValue}
            favoriteItems = {favoriteItems}
            onAddToCart = {onAddToCart} 
            addNewFavorite={addNewFavorite} 
          />
        }>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
