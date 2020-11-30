import React from 'react';
import axios from 'axios';
import Filter from './filter';
import ProductsList from './products-list';
import PaginationContainer from './pagination-container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import qs from 'qs';
import '../styles/products-container.scss';
import Product from './product';

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            categories: [],
            limit: 5,
            skip: 0,
            categoryId: null
        };

        this.getProducts = this.getProducts.bind(this);
        this.getProductsCount = this.getProductsCount.bind(this);
    }

    componentDidMount() {
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

    getProductsCount(callback) {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products/count',
        })
            .then((response) => callback(response.data));
    }

    getProducts({ limit, skip, categoryId }) {
        const params = {};

        if (limit) {
            this.setState({
                limit, skip
            })
            params.limit = limit;
            params.skip = skip;
            params.categoryId = this.state.categoryId
        } else {
            this.setState({
                categoryId
            })
            params.limit = this.state.limit;
            params.skip = this.state.skip;
            params.categoryId = categoryId
        }
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: params,
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
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="products-page-container">
                            <Filter
                                categories={this.state.categories}
                                handleFilterClick={(categoryId) => this.getProducts({ categoryId })}
                            />
                            <div className="products-page">
                                <ProductsList products={this.state.products} />
                                <PaginationContainer
                                    getItemsCount={this.getProductsCount}
                                    onChange={(limit, skip) => this.getProducts({ limit, skip })}
                                />
                            </div>
                        </div>
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default ProductsContainer;
