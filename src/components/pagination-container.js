import React from 'react';
import PaginationElement from './pagination-element';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PaginationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        
        this.productsCounter = this.productsCounter.bind(this);
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

    productsCounter() {
        let pagesQuantity = this.state.products.length / 5;
        // console.log(pagesQuantity);

        for (let i = 0; i <= pagesQuantity; i++) {
            return <PaginationElement onChange={() => this.props.onChange(i, 5)} page={i} text={`Page ${i+1}`} />
        }

        // console.log(this.state.products, '123123123')
        // let allProducts = this.props.products;
        // let arrProducts = [];
        // arrProducts.push(allProducts);
        // console.log(this.props.productsLength.products, '======')
        // // for(let i = 0; i <= allProducts.length; i++) {

        // // }
    }
    render() {
        console.log(this.productsCounter())
        return (
            <div className="d-flex flex-direction-column justify-content-between w-50 p-4">
                {this.productsCounter()}
                {/* <PaginationElement onChange={this.props.onChange} page={0} text={'Page 1'} />
                <PaginationElement onChange={this.props.onChange} page={1} text={'Page 2'} />
                <PaginationElement onChange={this.props.onChange} page={2} text={'Page 3'} />
                <PaginationElement onChange={this.props.onChange} page={3} text={'Page 4'} /> */}
            </div>
        );
    }
}

export default PaginationContainer;