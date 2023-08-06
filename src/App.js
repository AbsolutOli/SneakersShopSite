function App() {
  return <div className="wrapper">
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
          <img width={18} height={17} src="/img/user.svg" alt="User Logo" />
        </li>
      </ul>
    </header>
    <div className="content">
      <h1>Все кроссовки</h1>


      <div className="card">
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers 1" />
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div>
          <div>
            <span>Цена:</span>
            <b>5199.60 грн.</b>
          </div>
          <button>
            <img width={32} height={32} src="/img/plus.svg" alt="Plus Icon" />
          </button>
        </div>
      </div>


    </div>
  </div>;
}

export default App;
