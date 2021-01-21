import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ConnectedRouterProps } from 'connected-react-router';
import { getProductById } from '../../store/thunk-actions/products';
import { resetProducts } from '../../store/slices/products';
import type { RootState } from '../../store/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Product = (props: ConnectedRouterProps): JSX.Element | null => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.data,
  );
    // eslint-disable-next-line no-underscore-dangle
  const product = products.find((item) => item._id === id);

  useEffect(() => {
    dispatch(getProductById(id));

    return () => {
      dispatch(resetProducts());
    };
  });

  return (
    product
      ? (
        <div className="product-container">
          <div className="photo-wrap">
            <img src={product.image} className="img" alt={product.name} width={300} />
          </div>
          <div className="product-content">
            <h1 className="title">{product.name}</h1>
            <div className="price">
              {product.price}
              $
            </div>
            <div className="description">{product.description}</div>
          </div>
        </div>
      )
      : null
  );
};

export default Product;
