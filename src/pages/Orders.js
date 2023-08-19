import React, { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Orders() {
    const [orderItems, setOrderItems] = React.useState([]);
    const [orderLoading, setOrderLoading] = React.useState(true);


    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://64d8bbc85f9bf5b879ce81a8.mockapi.io/orders');
                setOrderItems(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setOrderLoading(false);
            } catch (error) {
                alert('Ошибка загрузки списка заказов!');
                console.error(error);
            }
        })()
    }, [])

    return <div className="content">


        <div className="search-sneakers-block">
            <h1>Мои покупки</h1>
        </div>

        <div className="sneakers">
            {(orderLoading ? [...Array(8)] : orderItems).map((card, index) => (
                <Card
                    key={index}
                    {...card}
                    loading={orderLoading} />
            ))}
        </div>

    </div>
}

export default Orders;