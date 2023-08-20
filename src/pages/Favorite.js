import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorite({ isLoading }) {
    const { likedCardsArr, onAddToLiked } = React.useContext(AppContext);
    return <div className="content">

        <div className="search-sneakers-block">
            <h1>Мои закладки</h1>
        </div>

        <div className="sneakers">
            {(isLoading ? [...Array(8)] : likedCardsArr).map((card, index) => (
                <Card
                    key={index}
                    onLike={(obj) => onAddToLiked(obj)}
                    loading={isLoading}
                    {...card} />
            ))}
        </div>

    </div>
}

export default Favorite;