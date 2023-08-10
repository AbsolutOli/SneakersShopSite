function Header(props) {
    return <header>
        <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" alt="Logo" />
            <div className="headerInfo">
                <h3>Sneakers Shop</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight">
            <li onClick={props.onCartClick} >
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
}

export default Header;