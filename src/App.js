import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import SidePanel from './components/SidePanel';
import Header from './components/Header';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

function App() {
  const [cardsArr, setCardsArr] = React.useState([]);
  const [cartCardsArr, setCartCardsArr] = React.useState([]);
  const [likedCardsArr, setLikedCardsArr] = React.useState([]);
  const [searchValue, setSearcValue] = React.useState('');
  const [cartState, setCartState] = React.useState(false);
  // console.log(cardsArr)
  // console.log(likedCardsArr)

  React.useEffect(() => {
    axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/items').then((res) => {
      setCardsArr(res.data);
    })
    axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/cart').then((res) => {
      setCartCardsArr(res.data);
    })
    axios.get('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite').then((res) => {
      setLikedCardsArr(res.data);
    })

  }, [])

  const onAddToLiked = async (obj) => {
    try {
      if (likedCardsArr.find((card) => card.id === obj.id)) {
        axios.delete(`https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite/${obj.id}`);
        //setLikedCardsArr((prev) => prev.filter((card) => card.id !== obj.id));
      } else {
        const { data } = await axios.post('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite', obj);
        setLikedCardsArr((prev) => [...prev, data]);
      }
    } catch {
      alert('Не удалось добавить в фавориты');
    }

  }

  const onRemoveItems = (id) => {
    axios.delete(`https://64d608f7754d3e0f13617faa.mockapi.io/cart/${id}`);
    setCartCardsArr((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToCart = (obj) => {
    axios.post('https://64d608f7754d3e0f13617faa.mockapi.io/cart', obj);
    setCartCardsArr((prev) => [...prev, obj]);
  }

  const onChangeInputValue = (event) => {
    setSearcValue(event.target.value);
  }

  return <div className="wrapper">


    <Header onCartClick={() => setCartState(true)} />
    {cartState && <SidePanel items={cartCardsArr} onClose={() => setCartState(false)} onRemove={onRemoveItems} />}

    <Routes>
      <Route path="/" element={
        <Home searchValue={searchValue} setSearcValue={setSearcValue} onChangeInputValue={onChangeInputValue} cardsArr={cardsArr} onAddToCart={onAddToCart} onAddToLiked={(obj) => onAddToLiked(obj)} />
      } />
      <Route path="/favorites" element={
        <Favorite item={likedCardsArr} onAddToLiked={onAddToLiked} />
      } />
    </Routes>
  </div>;
}

export default App;
