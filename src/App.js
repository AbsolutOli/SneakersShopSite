import React from 'react';
import Card from './components/Card';
import SidePanel from './components/SidePanel';
import Header from './components/Header';

function App() {
  const [cardsArr, setCardsArr] = React.useState([]);
  const [cartCardsArr, setCartCardsArr] = React.useState([]);
  const [searchValue, setSearcValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://64d608f7754d3e0f13617faa.mockapi.io/items')
      .then((res) => res.json())
      .then((json => setCardsArr(json)));
  }, [])

  const [cartState, setCartState] = React.useState(false);

  const onAddToCart = (obj) => {
    setCartCardsArr((prev) => [...prev, obj]);
  }

  const onChangeInputValue = (event) => {
    setSearcValue(event.target.value);
  }

  return <div className="wrapper">
    {cartState && <SidePanel items={cartCardsArr} onClose={() => setCartState(false)} />}

    <Header onCartClick={() => setCartState(true)} />

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
          <Card key={index} image={card.image} title={card.title} price={card.price} onPlus={(obj) => onAddToCart(obj)} />
        ))}
      </div>

    </div>
  </div>;
}

export default App;
