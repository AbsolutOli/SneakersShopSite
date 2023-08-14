import Card from '../components/Card';

function Home({ searchValue, setSearcValue, onChangeInputValue, cardsArr, onAddToCart, onAddToLiked }) {
    return <div className="content">
        <div className="search-sneakers-block">
            <h1>{searchValue ? `Результат поиска "${searchValue}"` : "Все кроссовки"}</h1>
            <div>
                {searchValue ? <button onClick={() => (setSearcValue(''))}><img width={16} height={16} src="/img/cross.svg" alt="Close" /></button> : <img src="/img/search.svg" alt="Search Icon" />}
                <input onChange={onChangeInputValue} placeholder="Поиск..." value={searchValue} />
            </div>
        </div>

        <div className="sneakers">
            {cardsArr.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((card, index) => (
                <Card key={index} onPlus={(obj) => onAddToCart(obj)} onLike={(obj) => onAddToLiked(obj)} {...card} />
            ))}
        </div>

    </div>
}

export default Home;