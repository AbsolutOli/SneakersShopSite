import React from 'react';
import Card from '../components/Card';

function Home({ searchValue,
    setSearcValue,
    onChangeInputValue,
    cardsArr,
    onAddToCart,
    onAddToLiked,
    isLoading }) {

    const renderRealItems = () => {
        const filteredItems = cardsArr.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return filteredItems.map((card, index) => (
            <Card
                key={index}
                parentId={card.id}
                onPlus={(obj) => onAddToCart(obj)}
                onLike={(obj) => onAddToLiked(obj)}
                loading={isLoading}
                {...card} />
        ))
    }

    const renderFakeItems = () => {
        return [...Array(10)].map((card, index) => (
            <Card
                key={index}
                loading={isLoading} />
        ))
    }

    return <div className="content">
        <div className="search-sneakers-block">
            <h1>{searchValue ? `Результат поиска "${searchValue}"` : "Все кроссовки"}</h1>
            <div>
                {searchValue ? <button onClick={() => (setSearcValue(''))}><img width={16} height={16} src="img/cross.svg" alt="Close" /></button> : <img src="img/search.svg" alt="Search Icon" />}
                <input onChange={onChangeInputValue} placeholder="Поиск..." value={searchValue} />
            </div>
        </div>

        <div className="sneakers">
            {isLoading ? renderFakeItems() : renderRealItems()}
        </div>

    </div>
}

export default Home;