import React, { useEffect, useState } from 'react';
import Filter from '../library/filter';
import ProductsList from './products-list';
import Pagination from '../library/pagination';
import fetch from '../../library/fetch';

const DEFAULT_PAGINATION_PARAMS = { limit: 5, skip: 0 };

const Products = (): JSX.Element => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [{ limit, skip }, setPaginationParams] = useState(DEFAULT_PAGINATION_PARAMS);
    const [categoryId, setCategoryId] = useState<string[] | null>(null);

    useEffect(() => {
        fetch('/categories')
            .then((response) => setCategories(response));
    }, []);

    const getProductsCount = (callback: (count: number) => void) => {
        fetch('/products/count')
            .then((response) => callback(response));
    };

    const getProducts = (params: { categoryId?: string[] | null, skip?: number, limit?: number }) => {
        const queryParams = { skip, limit, categoryId };

        if (params.limit && params.skip) {
            setPaginationParams({
                limit, skip
            });

            queryParams.limit = params.limit;
            queryParams.skip = params.skip;
        } else if (params.categoryId) {
            setCategoryId(categoryId);

            queryParams.categoryId = params.categoryId
        }

        fetch('/products', {
            queryParams,
        })
            .then((response) => {
                setProducts(response)
            });
    };

    return (
        <div className="products-container">
            <Filter
                categories={categories}
                handleFilterClick={(categoryId: string[]) => { getProducts({ categoryId }) }}
            />
            <ProductsList products={products} />
            <Pagination
                getItemsCount={getProductsCount}
                onChange={(limit, skip) => getProducts({ limit, skip })}
            />
        </div>
    )
};

export default Products;
