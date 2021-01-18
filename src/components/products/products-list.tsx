import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../schemas/product';

const renderProducts = (data: Product[]) => data.map(({ image, name, price, description, _id }) => (
    <div className="product" key={_id}>
        <Link to={`/product/${_id}`}>
            <img className="photo" src={image} alt={name} width={200} />
        </Link>
        <div className="game-info-container">
            <Link to={`/${_id}`}>
                <div className="title">{name}</div>
            </Link>
            <div className="issue-date">{price}$</div>
            <div className="description">{description}</div>
        </div>
    </div>
));

const ProductsList = ({ products }: { products: Product[] }): JSX.Element => {
    return (
        <div className="product-list-container">
            {renderProducts(products)}
        </div>
    )
};

export default ProductsList;