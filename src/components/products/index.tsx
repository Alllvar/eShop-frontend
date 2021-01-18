import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { push } from 'connected-react-router';
import Filter from '../library/filter';
import Pagination from '../library/pagination';
import ProductsList from './products-list';
import { getCategories } from '../../redux/actions/categories';
import { getProducts, getProductsCount } from '../../redux/actions/products';
import { RootState } from '../../redux/types';

const Products = (): JSX.Element => {
    const dispatch = useDispatch();
    const { search } = useSelector(
        (state: RootState) => state.router.location
    );
    const { page = '1', categoryId } = qs.parse(search, { parseArrays: true, ignoreQueryPrefix: true });
    const categories = useSelector(
        (state: RootState) => state.categories.data
    );

    const products = useSelector(
        (state: RootState) => state.products.data
    );
    const productsCount = useSelector(
        (state: RootState) => state.products.count
    );

    useEffect(() => {
        dispatch(
            getProducts(
                {
                    limit: 1,
                    skip: parseInt(page as string) * 1,
                    categoryId: categoryId as string[] || [],
                }
            )
        );
        dispatch(getProductsCount(categoryId as string[] || []));
    }, [search]);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProductsCount());
    }, []);

    const handleFilterClick = (categoryId: string[] = []) => {
        dispatch(
            push({
                search: qs.stringify(
                    { categoryId, page: 1 },
                    { addQueryPrefix: true, skipNulls: true }
                )
            })
        )
    };

    const handlePageClick = (page: number) => {
        dispatch(
            push({
                search: qs.stringify(
                    { categoryId, page },
                    { addQueryPrefix: true, skipNulls: true }
                )
            })
        )
    };

    return (
        <div className="products-container">
            <Filter
                categories={categories}
                handleFilterClick={handleFilterClick}
            />
            <ProductsList products={products} />
            <Pagination
                total={productsCount}
                onChange={handlePageClick}
                page={parseInt(page as string)}
                perPage={1}
            />
        </div>
    )
};

export default Products;
