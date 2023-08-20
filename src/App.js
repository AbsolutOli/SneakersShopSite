import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import SidePanel from './components/SidePanel/SidePanel';
import Header from './components/Header';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import AppContext from './context';
import Orders from './pages/Orders';


function App() {
  const [cardsArr, setCardsArr] = React.useState([]);
  const [cartCardsArr, setCartCardsArr] = React.useState([]);
  const [likedCardsArr, setLikedCardsArr] = React.useState([]);
  const [searchValue, setSearcValue] = React.useState('');
  const [cartState, setCartState] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

    async function getResponse() {
      try {
        const [cartCards, likedCards, cards] = await Promise.all([
          axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/cart'),
          axios.get('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite'),
          axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/items')
        ])

        //const cartCards = await axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/cart');
        //const likedCards = await axios.get('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite');
        setIsLoading(false);
        //const cards = await axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/items');

        setCardsArr(cards.data);
        setCartCardsArr(cartCards.data);
        setLikedCardsArr(likedCards.data);
      } catch (error) {
        alert('Не удалось получить данные с сервера ;(');
        console.error(error);
      }
    }

    getResponse();
  }, [])

  const onAddToLiked = async (obj) => {
    console.log(obj)
    console.log(likedCardsArr)
    try {
      if (likedCardsArr.find((card) => card.parentId === obj.parentId)) {
        const [currentItem] = likedCardsArr.filter((card) => card.parentId === obj.parentId);
        axios.delete(`https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite/${currentItem.id}`);
        setLikedCardsArr((prev) => prev.filter((card) => card.parentId !== obj.parentId));
      } else {
        const { data } = await axios.post('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite', obj);
        setLikedCardsArr((prev) => [...prev, data]);
      }
    } catch {
      alert('Не удалось добавить в фавориты');
    }
  }

  const onRemoveItems = (id) => {
    try {
      axios.delete(`https://64d608f7754d3e0f13617faa.mockapi.io/cart/${id}`);
      setCartCardsArr((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Не удалось удалить товар');
      console.error(error);
    }
  }

  const onAddToCart = async (obj) => {
    try {
      if (cartCardsArr.find((card) => Number(card.parentId) === Number(obj.parentId))) {
        const [currentItem] = cartCardsArr.filter((card) => card.parentId === obj.parentId);
        axios.delete(`https://64d608f7754d3e0f13617faa.mockapi.io/cart/${currentItem.id}`);
        setCartCardsArr((prev) => prev.filter((card) => card.parentId !== obj.id));
      } else {
        const { data } = await axios.post('https://64d608f7754d3e0f13617faa.mockapi.io/cart', obj);
        setCartCardsArr((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить/удалить товар!');
      console.error(error);
    }

  }

  const onChangeInputValue = (event) => {
    setSearcValue(event.target.value);
  }

  const isCardAdded = (pid) => {
    return cartCardsArr.some((obj) => obj.parentId === pid);
  }

  const isCardLiked = (pid) => {
    return likedCardsArr.some((obj) => obj.parentId === pid);
  }

  return <AppContext.Provider value={{ cardsArr, cartCardsArr, likedCardsArr, isCardAdded, onAddToLiked, setCartState, setCartCardsArr, isCardLiked }}>
    <div className="wrapper">
      <Header onCartClick={() => setCartState(true)} />
      <SidePanel items={cartCardsArr} onClose={() => setCartState(false)} onRemove={onRemoveItems} cartState={cartState} />

      <Routes>
        <Route path="/" element={
          <Home
            searchValue={searchValue}
            setSearcValue={setSearcValue}
            onChangeInputValue={onChangeInputValue}
            cardsArr={cardsArr}
            onAddToCart={(obj) => onAddToCart(obj)}
            onAddToLiked={(obj) => onAddToLiked(obj)}
            cartCardsArr={cartCardsArr}
            isLoading={isLoading} />
        } />

        <Route path="/favorites" element={
          <Favorite isLoading={isLoading} />
        } />

        <Route path="/orders" element={
          <Orders />
        } />
      </Routes>
    </div>;
  </AppContext.Provider>
}

export default App;
