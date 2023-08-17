import React from 'react';
import AppContext from '../context';

const Info = ({ image, title, text }) => {
    const { setCartState } = React.useContext(AppContext);

    return (
        <div className="empty_cart">
            <img className="empty_cart_image" width={120} height={120} src={image} alt="Empty Cart" />
            <div className="text">
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
            <button onClick={() => setCartState(false)} className="btnBack GreenBtn">
                <div className="btnContent">
                    <img src="/img/arrowRight.svg" alt="Arrow Icon" />
                    <p>Вернуться назад</p>
                </div>
            </button>
        </div>
    )
}

export default Info;