import React from 'react';
import axios from 'axios';
import Filter from './filter';
import GamesList from './games-list';
import '../assets/styles/games.scss';



class Games extends React.Component {
    state = {
        products: []
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
    }

    render() {
        return (
            <div className="products-page-container">
                <Filter />
                <GamesList products={this.state.products} />
            </div>
        )
    }
}

export default Games;
