import React from 'react';
import Card from './components/Card';
import SidePanel from './components/SidePanel';
import Header from './components/Header';

function App() {
  const [cardsArr, setCardsArr] = React.useState([]);
  const [cartCardsArr, setCartCardsArr] = React.useState([]);
  React.useEffect(() => {
    fetch('https://64d608f7754d3e0f13617faa.mockapi.io/items')
      .then((res) => res.json())
      .then((json => setCardsArr(json)));
  }, [])

  const [cartState, setCartState] = React.useState(false);

  const onAddToCart = (obj) => {
    setCartCardsArr((prev) => [...prev, obj]);
  }

  return <div className="wrapper">
    {cartState && <SidePanel items={cartCardsArr} onClose={() => setCartState(false)} />}

    <Header onCartClick={() => setCartState(true)} />

    <div className="content">

      <div className="search-sneakers-block">
        <h1>Все кроссовки</h1>
        <div>
          <img src="/img/search.svg" alt="Search Icon" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="sneakers">
        {cardsArr.map((card) => (
          <Card image={card.image} title={card.title} price={card.price} onPlus={(obj) => onAddToCart(obj)} />
        ))}
      </div>

    </div>
  </div>;
}

export default App;
