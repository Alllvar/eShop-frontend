import React from 'react';
import PaginationElement from './pagination-element';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEMS_PER_PAGE } from '../constants/pagination';

class PaginationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
        
        this.productsCounter = this.productsCounter.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products/count',
        })
        .then((response) => {
            this.setState({
                count: response.data
            })
        }); 
    }

    productsCounter() {
        const pagesQuantity = Math.ceil(this.state.count / ITEMS_PER_PAGE);
        const arr = Array(pagesQuantity).fill(null).map((_, i) => i);

        return arr.map(
            (el, index) => <PaginationElement
                key={index}
                onChange={() => this.props.onChange(ITEMS_PER_PAGE, index * ITEMS_PER_PAGE)}
                page={index} text={`Page ${index + 1}`}
            />
        )
    }

    render() {
        return (
            <div className="d-flex flex-direction-column justify-content-between w-50 p-4">
                {this.productsCounter()}
            </div>
        );
    }
}

export default PaginationContainer;