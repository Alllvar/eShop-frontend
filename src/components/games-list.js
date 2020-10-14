import React from 'react';
import '../styles/games-list.scss';

const renderGameBlock = (data) => data.map(({ image, name, price, description, _id }) => (
    <div className="game-block" key={_id}>
        <div className="photo-wrap">
            <img className="photo" src={image} alt={name} />
        </div>
        <div className="game-info-container">
            <div className="title">{name}</div>
            <div className="issue-date">{price}$</div>
            <div className="description">{description}</div>
        </div>
    </div>
));

class GamesList extends React.Component {
    render() {
        return (
            <div className="games-list-container">
                {renderGameBlock(this.props.products)}
            </div>
        )
    }
}

export default GamesList;