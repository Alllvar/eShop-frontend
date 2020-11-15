import React from 'react';
import axios from 'axios';
import Filter from './filter';
import ProductsList from './products-list';
import PaginationContainer from './pagination-container';
import { ITEMS_PER_PAGE } from '../constants/pagination';
import qs from 'qs';
import '../styles/products-container.scss';

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            categories: []
        };

        this.updateProductsList = this.updateProductsList.bind(this);
        this.getProductsByCategories = this.getProductsByCategories.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: {
                limit: ITEMS_PER_PAGE,
                skip: 0 
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
          })
        .then((response) => {
            this.setState({
                products: response.data
            })
        });

        axios({
            method: 'get',
            url: 'http://localhost:8081/categories',
          })
        .then((response) => {
            this.setState({
                categories: response.data
            })
        });
    }

    getProductsByCategories(categories) {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: {
                categoryId: categories
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
        .then((response) => {
            this.setState({
                products: response.data
            })
        }); 
    }

    updateProductsList(limit, skip) {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: {
                limit, skip
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
        .then((response) => {
            this.setState({
                products: response.data
            })
        }); 
    }
    
    render() {
        return (
            <div className="products-page-container">
                <Filter
                    categories={this.state.categories}
                    handleFilterClick={(categories) => this.getProductsByCategories(categories)}
                />
                <div>
                    <ProductsList products={this.state.products} />
                    <PaginationContainer onChange={this.updateProductsList} />
                </div>
            </div>
        )
    }
}

export default ProductsContainer;
