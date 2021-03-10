import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { push } from 'connected-react-router';
import Filter from '../library/filter';
import Pagination from '../library/pagination';
import ProductsList from './products-list';
import { getCategories } from '../../store/thunk-actions/categories';
import { getProducts, getProductsCount } from '../../store/thunk-actions/products';
import { ITEMS_PER_PAGE } from '../../constants/pagination';
// import { resetProducts } from '../../store/slices/products';
import { ProductsContainer, PaginationContainer, MainPageContainer } from './products.styled';
import type { RootState } from '../../store/types';

const Products = (): JSX.Element => {
  const dispatch = useDispatch();
  const { search } = useSelector(
    (state: RootState) => state.router.location,
  );
  const categories = useSelector(
    (state: RootState) => state.categories.data,
  );
  const products = useSelector(
    (state: RootState) => state.products.data,
  );
  const productsCount = useSelector(
    (state: RootState) => state.products.count,
  );
  const {
    page = '1', categoryId, priceFrom = '0', priceTo = '10000', sortBy = 'name', sortDirection = 'desc',
  } = qs.parse(
    search, { parseArrays: true, ignoreQueryPrefix: true },
  );

  useEffect(() => {
    dispatch(
      getProducts(
        {
          limit: ITEMS_PER_PAGE,
          skip: (parseInt(page as string, 10) - 1) * ITEMS_PER_PAGE,
          categoryId: categoryId as string[] || [],
          priceFrom: parseInt(priceFrom as string, 10),
          priceTo: parseInt(priceTo as string, 10),
          sortBy: sortBy as string,
          sortDirection: sortDirection as string,
        },
      ),
    );
    dispatch(getProductsCount(categoryId as string[] || []));
  }, [page, categoryId, priceFrom, priceTo, sortBy, sortDirection]);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductsCount());

    return () => {
      // eslint-disable-next-line new-cap
      // dispatch(new resetProducts());
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleFilterClick = (categoryId: string[] = []) => {
    dispatch(
      push({
        search: qs.stringify(
          {
            priceFrom, priceTo, categoryId, page: 1, sortBy, sortDirection,
          },
          { addQueryPrefix: true, skipNulls: true },
        ),
      }),
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleRange = (priceFrom: number, priceTo: number) => {
    dispatch(
      push({
        search: qs.stringify(
          {
            priceFrom, priceTo, categoryId, page, sortBy, sortDirection,
          },
          { addQueryPrefix: true, skipNulls: true },
        ),
      }),
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleSort = (sortBy: string, sortDirection: string) => {
    dispatch(
      push({
        search: qs.stringify(
          {
            priceFrom, priceTo, categoryId, page, sortBy, sortDirection,
          }, {
            addQueryPrefix: true, skipNulls: true,
          },
        ),
      }),
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handlePageClick = (page: number) => {
    dispatch(
      push({
        search: qs.stringify(
          {
            priceFrom, priceTo, categoryId, page, sortBy, sortDirection,
          },
          { addQueryPrefix: true, skipNulls: true },
        ),
      }),
    );
  };

  return (
    <MainPageContainer>
      <ProductsContainer>
        <Filter
          categories={categories}
          handleFilterClick={handleFilterClick}
          handleRange={handleRange}
          handleSort={handleSort}
        />
        <ProductsList products={products} />
      </ProductsContainer>
      <PaginationContainer>
        <Pagination
          total={productsCount}
          onChange={handlePageClick}
          page={parseInt(page as string, 10)}
          perPage={ITEMS_PER_PAGE}
        />
      </PaginationContainer>
    </MainPageContainer>
  );
};

export default Products;
