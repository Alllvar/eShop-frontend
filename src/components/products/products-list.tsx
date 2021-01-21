import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../schemas/product';
import {
  ProductContainer,
  ProductPhoto,
  ProductInfoContainer,
  Title,
  Price,
  Description,
} from './product.styled';

const renderProducts = (data: Product[]) => data.map(({
  image, name, price, description, _id,
}) => (
  <ProductContainer key={_id}>
    <Link to={`/${_id}`}>
      <ProductPhoto src={image} alt={name} />
    </Link>
    <ProductInfoContainer>
      <Link to={`/${_id}`} style={{ textDecoration: 'none' }}>
        <Title>{name}</Title>
      </Link>
      <Price>
        {price}
        $
      </Price>
      <Description>{description}</Description>
    </ProductInfoContainer>
  </ProductContainer>
));

const ProductsList = ({ products }: { products: Product[] }): JSX.Element => (
  <div className="product-list-container">
    {renderProducts(products)}
  </div>
);

export default ProductsList;
