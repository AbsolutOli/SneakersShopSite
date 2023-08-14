import Card from '../components/Card';

function Favorite({ item, onAddToLiked }) {
    return <div className="content">
        <div className="search-sneakers-block">
            <h1>Мои закладки</h1>
        </div>

        <div className="sneakers">
            {item.map((card, index) => (
                <Card
                    key={index}
                    liked={true}
                    onLike={(obj) => onAddToLiked(obj)}
                    {...card} />
            ))}
        </div>

    </div>
}

export default Favorite;