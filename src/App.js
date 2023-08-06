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
      ...
    </div>
  </div>;
}

export default App;
