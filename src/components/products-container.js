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

    render() {
        return (
            <div className="products-page-container">
                <Filter
                    categories={this.state.categories}
                    handleFilterClick={(categories) => this.getProductsByCategories(categories)}
                />
                <GamesList products={this.state.products} />
            </div>
        )
    }
}

export default ProductsContainer;
