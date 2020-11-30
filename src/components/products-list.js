import React from 'react';
import Product from './product'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import '../styles/products-list.scss';

const renderGameBlock = (data) => data.map(({ image, name, price, description, _id }) => (
    <div className="game-block" key={_id}>
        <Link to={`/product/${_id}`}>
            <div className="photo-wrap">
                <img className="photo" src={image} alt={name} />
            </div>
        </Link>
        <div className="game-info-container">
            <Link to={`/product/${_id}`}>
                <div className="title">{name}</div> 
            </Link>
            <div className="issue-date">{price}$</div>
            <div className="description">{description}</div>
        </div>
    </div>
));

class ProductsList extends React.Component {
    render() {
        return (
            <div className="games-list-container">
                {renderGameBlock(this.props.products)}
            </div>
        )
    }
}

export default ProductsList;