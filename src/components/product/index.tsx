import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ConnectedRouterProps } from 'connected-react-router';
import { getProductById, getProductreviews } from '../../store/thunk-actions/products';
import { resetProducts } from '../../store/slices/products';
import type { RootState } from '../../store/types';
import {
  ProductContainer,
  ProductPhotoWrap,
  ProductContentWrap,
  ProductPhoto,
  ReviewContainer,
  ReviewTitle,
} from './product.styled';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Product = (props: ConnectedRouterProps): JSX.Element | null => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.products.data,
  );
  const reviews = useSelector(
    (state: RootState) => state.products.reviews,
  );
    // eslint-disable-next-line no-underscore-dangle
  const product = products.find((item) => item._id === id);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getProductreviews(id));

    return () => {
      dispatch(resetProducts());
    };
  }, []);

  return (
    product
      ? (
        <ProductContainer>
          <ProductPhotoWrap>
            <ProductPhoto src={product.image} className="img" alt={product.name} width={300} />
          </ProductPhotoWrap>
          <ProductContentWrap>
            <h1 className="title">{product.name}</h1>
            <div className="price">
              {product.price}
              $
            </div>
            <div className="description">{product.description}</div>
            {reviews.map((review) => (
              <ReviewContainer>
                <ReviewTitle>{review.title}</ReviewTitle>
                <div>{review.description}</div>
                <div>{review.date}</div>
              </ReviewContainer>
            )) }
          </ProductContentWrap>
        </ProductContainer>
      )
      : null
  );
};

export default Product;
