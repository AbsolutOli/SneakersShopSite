import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();

    return <header>
        <Link to="SneakersShopSite/">
            <div className="headerLeft">
                <img width={40} height={40} src="img/logo.png" alt="Logo" />
                <div className="headerInfo">
                    <h3>Sneakers Shop</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className="headerRight">
            <li onClick={props.onCartClick} >
                <img width={18} height={17} src="img/cart.svg" alt="Cart Logo" />
                <span>{Number(totalPrice).toFixed(2)} грн.</span>
            </li>
            <Link to="favorites/SneakersShopSite/">
                <li>
                    <img width={21} height={19} src="img/heart.svg" alt="Heart Logo" />
                </li>
            </Link>
            <Link to="orders/SneakersShopSite/">
                <li>
                    <img width={20} height={20} src="img/user.svg" alt="User Logo" />
                </li>
            </Link>
        </ul>
    </header>
}

export default Header;