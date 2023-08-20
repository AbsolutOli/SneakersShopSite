import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './SidePanel.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function SidePanel({ onClose, items = [], onRemove, cartState = false }) {

    const { setCartCardsArr, totalPrice } = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState('');
    const [loadingOrder, setLoadingOrder] = React.useState(false);



    const onClickOrder = async () => {
        setLoadingOrder(true);
        try {
            const { data } = await axios.post('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/orders', {
                items
            })
            setOrderId(data.id);
            for (let i = 0; i < items.length; i++) {
                await axios.delete(`https://64d608f7754d3e0f13617faa.mockapi.io/cart/${items[i].id}`)
                await delay;
            }
            setIsOrderComplete((prev) => prev = true);
            setCartCardsArr([]);
        } catch {
            alert('Не удалось обработать заказ!');
        }
        setLoadingOrder(false);
    }

    return <div className={`${styles.side_panel} ${cartState && styles.side_panel_visible}`}>
        <div className={styles.panel}>
            <div className={styles.side_panel_head}>
                <h3>Корзина</h3>
                <button className={styles.closeBtn} onClick={onClose}>
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>
                </button>
            </div>
            {items.length > 0 ?
                <div className={styles.full_cart}>
                    <div className={styles.cart_items}>
                        {items.map((obj) => (
                            <div key={obj.id} className={styles.cart_item} >
                                <div className={styles.cart_item_image}>
                                    <img src={obj.image} alt="Sneakers 1" />
                                </div>
                                <div className={styles.cart_item__info}>
                                    <p>{obj.title}</p>
                                    <b>{obj.price} грн.</b>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className={styles.closeBtn}>
                                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.cart_prices}>
                        <div className={styles.price}>
                            <p>Итого: </p>
                            <span></span>
                            <b>{Number(totalPrice).toFixed(2)} грн.</b>
                        </div>
                        <div className={styles.price}>
                            <p>Налог 5%: </p>
                            <span></span>
                            <b>{Number(totalPrice * 0.05).toFixed(2)} грн.</b>
                        </div>
                    </div>
                    <button disabled={loadingOrder} onClick={onClickOrder} className={`${styles.btnOrder} ${styles.GreenBtn}`}>
                        <div className={styles.btnContent}>
                            <p>Оформить заказ</p>
                            <img src="/img/arrowRight.svg" alt="Arrow Icon" />
                        </div>
                    </button>
                </div> : <Info
                    image={isOrderComplete ? '/img/ordercomplete.svg' : '/img/emptycart.png'}
                    title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                    text={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} />}
        </div>
    </div >
}

export default SidePanel;