function SidePanel({ onClose, items = [], onRemove }) {
    return <div className="side-panel">
        <div className="panel">
            <div className="side-panel-head">
                <h3>Корзина</h3>
                <button className="closeBtn" onClick={onClose}>
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>
                </button>
            </div>
            {items.length > 0 ?
                <div className="full_cart">
                    <div className="cart-items">
                        {items.map((obj) => (
                            <div key={obj.id} className="cart-item" >
                                <div className="cart-item-image">
                                    <img src={obj.image} alt="Sneakers 1" />
                                </div>
                                <div className="cart-item__info">
                                    <p>{obj.title}</p>
                                    <b>{obj.price} грн.</b>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className="closeBtn">
                                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-prices">
                        <div className="price">
                            <p>Итого: </p>
                            <span></span>
                            <b>5199.60 грн.</b>
                        </div>
                        <div className="price">
                            <p>Налог 5%: </p>
                            <span></span>
                            <b>42.90 грн.</b>
                        </div>
                    </div>
                    <button className="btnOrder GreenBtn">
                        <div className="btnContent">
                            <p>Оформить заказ</p>
                            <img src="/img/arrowRight.svg" alt="Arrow Icon" />
                        </div>
                    </button>
                </div> : <div className="empty_cart">
                    <img className="empty_cart_image" width={120} height={120} src="/img/emptycart.png" alt="Empty Cart" />
                    <div className="text">
                        <h5>Корзина пустая</h5>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    </div>
                    <button onClick={onClose} className="btnBack GreenBtn">
                        <div className="btnContent">
                            <img src="/img/arrowRight.svg" alt="Arrow Icon" />
                            <p>Вернуться назад</p>
                        </div>
                    </button>
                </div>}
        </div>
    </div >
}

export default SidePanel;