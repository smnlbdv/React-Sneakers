import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context.js";

import Header from "./components/header/Header.jsx";
import Basket from "./components/basket/Basket.jsx";
import Home from "./pages/Home.jsx";

import axios from "axios";
import Favorites from "./pages/Favorites.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const body = document.body;

  const clickCartIcon = () => {
    cartOpen
      ? (body.style = "overflow: auto;")
      : (body.style = "overflow: hidden;");
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const [cartRepsonse, itemsRepsonse] = await  Promise.all([
          axios.get("https://6540d1ed45bedb25bfc2af59.mockapi.io/cart"),
          axios.get("https://6540d1ed45bedb25bfc2af59.mockapi.io/sneakers"),
        ]);

        setIsLoading(false);

        setItems(itemsRepsonse.data);
        setCartItems(cartRepsonse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    console.log(obj)
    try {
      if (
        cartItems.some(
          (item) => {
            item.cartItem === obj.cartItem
          }
        )
      ) {
        console.log("есть")

        setCartItems((prev) =>
          prev.filter((item) => item.cartItem !==  obj.id )
        );
        // await axios.delete(
        //   `https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${
        //     obj.cartItem
        //   }`
        // );
      } else {
        await axios.post(
          "https://6540d1ed45bedb25bfc2af59.mockapi.io/cart",
          obj
        );
        setCount(count + 1);
        obj.id = count;
        setCartItems((prev) => [...prev, obj]);

      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }

  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const allRemoveCart = () => {

    cartItems.forEach(element => {
      try {
        axios.delete(`https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${element.id}`);
      } catch (error) {
        alert("Ошибка оформления заказа")
      }
    });
    setCartItems([])
  }

  const onRemoveItem = async (obj) => {
    console.log(obj)
    console.log(cartItems)

    try {
      cartItems.forEach(itemCart => {
        if(itemCart.cartItem == obj.cartItem) {
          axios.delete(`https://6540d1ed45bedb25bfc2af59.mockapi.io/cart/${itemCart.id}`);
          setCartItems((prev) =>
            prev.filter((item) => item.cartItem != obj.cartItem)
          );
        }
      })
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };

  const addNewFavorite = (obj) => {
    if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
      setFavoriteItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((item) => item.cartItem == id);
  };

  const isItemFavorite = (id) => {
    return favoriteItems.some((item) => Number(item.id) === Number(id));
  };

  return (
    <div className="wrapper clear">
      <Context.Provider
        value={{
          onRemoveItem,
          clickCartIcon,
          isItemAdded,
          isItemFavorite,
          setCartItems,
          cartItems,
          allRemoveCart
          
        }}
      >
        <Basket cartOpen={cartOpen} />

        <Header clickCartIcon={clickCartIcon} />

        <section className="slider__section"></section>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onChangeSearch={onChangeSearch}
                addNewFavorite={addNewFavorite}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites
                onChangeSearch={onChangeSearch}
                searchValue={searchValue}
                favoriteItems={favoriteItems}
                onAddToCart={onAddToCart}
                addNewFavorite={addNewFavorite}
              />
            }
          ></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
