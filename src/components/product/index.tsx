import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ConnectedRouterProps } from 'connected-react-router';
import { getProductById, getProductreviews } from '../../store/thunk-actions/products';
// import { resetProducts } from '../../store/slices/products';
import type { RootState } from '../../store/types';
import {
  ProductContainer,
  ProductContentWrap,
  ProductPhoto,
  ReviewContainer,
  ReviewWrap,
  ReviewTitle,
  Container,
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

  // console.log(reviews[0].evaluation, '==============================');

  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((item) => item._id === id);

  const getAllEvaluations: any = reviews.map((review) => review.evaluation);
  const sumOfAllEvaluation: any = getAllEvaluations.reduce((a: number, b: number) => a + b, 0);
  const averageEvaluation: any = sumOfAllEvaluation / getAllEvaluations.length;

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getProductreviews(id));

    return () => {
      // dispatch(resetProducts());
    };
  }, []);

  const renderReviews = () => reviews.map((review) => (
    <ReviewWrap>
      <ReviewTitle>{review.title}</ReviewTitle>
      <div>{review.description}</div>
      <div>{review.evaluation}</div>
      <div>{review.date}</div>
    </ReviewWrap>
  ));

  return (
    product
      ? (
        <Container>
          <ProductContainer>
            <div>
              <ProductPhoto src={product.image} alt={product.name} width={300} />
            </div>
            <ProductContentWrap>
              <h1 className="title">{product.name}</h1>
              <div className="price">
                {product.price}
                $
              </div>
              <div className="description">{product.description}</div>
              <div>
                Rating:
                {' '}
                {averageEvaluation}
              </div>
            </ProductContentWrap>
          </ProductContainer>
          <ReviewContainer>
            <h2>Products reviews:</h2>
            {renderReviews()}
          </ReviewContainer>
        </Container>
      )
      : null
  );
};

export default Product;
