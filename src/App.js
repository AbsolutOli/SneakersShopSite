import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import SidePanel from './components/SidePanel';
import Header from './components/Header';

function App() {
  const [cardsArr, setCardsArr] = React.useState([]);
  const [cartCardsArr, setCartCardsArr] = React.useState([]);
  const [likedCardsArr, setLikedCardsArr] = React.useState([]);
  const [searchValue, setSearcValue] = React.useState('');
  const [cartState, setCartState] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/items').then((res) => {
      setCardsArr(res.data);
    })
    axios.get('https://64d608f7754d3e0f13617faa.mockapi.io/cart').then((res) => {
      setCartCardsArr(res.data);
    })
  }, [])

  const onAddToLiked = (obj) => {
    axios.post('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/favorite', obj)
    setLikedCardsArr((prev) => [...prev, obj]);
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

    <div className="content">
      <div className="search-sneakers-block">
        <h1>{searchValue ? `Результат поиска "${searchValue}"` : "Все кроссовки"}</h1>
        <div>
          {searchValue ? <button onClick={() => (setSearcValue(''))}><img width={16} height={16} src="/img/cross.svg" alt="Close" /></button> : <img src="/img/search.svg" alt="Search Icon" />}
          <input onChange={onChangeInputValue} placeholder="Поиск..." value={searchValue} />
        </div>
      </div>

      <div className="sneakers">
        {cardsArr.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((card, index) => (
          <Card key={index} image={card.image} title={card.title} price={card.price} onPlus={(obj) => onAddToCart(obj)} onLike={(obj) => onAddToLiked(obj)} />
        ))}
      </div>

    </div>

  </div>;
}

export default App;
