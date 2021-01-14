import React from 'react';
import { Link } from "react-router-dom";

const renderProducts = (data) => data.map(({ image, name, price, description, _id }) => (
    <div className="product" key={_id}>
        <Link to={`/product/${_id}`}>
            <img className="photo" src={image} alt={name} width={200} />
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
            <div className="product-list-container">
                {renderProducts(this.props.products)}
            </div>
        )
    }
}

export default ProductsList;