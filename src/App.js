import React from 'react';
import Card from './components/Card';
import SidePanel from './components/SidePanel';
import Header from './components/Header';

const cardsArr = [
  { image: "/img/sneakers/1.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "5199.60" },
  { image: "/img/sneakers/2.jpg", title: "Мужские Кроссовки Nike Air Max 270", price: "5199.60" },
  { image: "/img/sneakers/3.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "3399.60" },
  { image: "/img/sneakers/4.jpg", title: "Кроссовки Puma X Aka Boku Future Rider", price: "3599.60" },
]

function App() {
  const [cartState, setCartState] = React.useState(false);

  return <div className="wrapper">
    {cartState && <SidePanel onClose={() => setCartState(false)} />}

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
          <Card image={card.image} title={card.title} price={card.price} />
        ))}
      </div>

    </div>
  </div>;
}

export default App;
