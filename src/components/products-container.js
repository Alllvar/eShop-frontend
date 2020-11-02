import React from 'react';
import axios from 'axios';
import Filter from './filter';
import GamesList from './games-list';
import qs from 'qs';
import '../styles/products-container.scss';

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            categories: []
        };

        this.getProductsByCategories = this.getProductsByCategories.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
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

    getProductsByCategories(a) {
        console.log(a, '======================A')
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: {
                categoryId: a
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
                <Filter categories={this.state.categories} handleFilterClick={(a) => this.getProductsByCategories(a)} />
                <GamesList products={this.state.products} />
            </div>
        )
    }
}

export default ProductsContainer;
