import Card from './components/Card';
import SidePanel from './components/SidePanel';


function App() {
  return <div className="wrapper">
    <SidePanel />

    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div className="headerInfo">
          <h3>Sneakers Shop</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={18} height={17} src="/img/cart.svg" alt="Cart Logo" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={21} height={19} src="/img/heart.svg" alt="Heart Logo" />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User Logo" />
        </li>
      </ul>
    </header>
    <div className="content">

      <div className="search-sneakers-block">
        <h1>Все кроссовки</h1>
        <div>
          <img src="/img/search.svg" alt="Search Icon" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="sneakers">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  </div>;
}

export default App;
