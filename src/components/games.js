import React from 'react';
import axios from 'axios';
import Filter from './filter';
import GamesList from './games-list';
import '../styles/games.scss';

class Games extends React.Component {
    state = {
        products: [],
        categories:[]
    };

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

    render() {
        return (
            <div className="products-page-container">
                <Filter categories={this.state.categories}/>
                <GamesList products={this.state.products} />
            </div>
        )
    }
}

export default Games;
