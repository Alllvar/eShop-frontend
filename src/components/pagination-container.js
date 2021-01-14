import React from 'react';
import PaginationElement from './pagination-element';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEMS_PER_PAGE } from '../constants/pagination';

class PaginationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            activePage: 0
        };
        
        this.renderButtons = this.renderButtons.bind(this);
        this.setItemsCount = this.setItemsCount.bind(this);
    }

    setItemsCount(count) {
        this.setState({ count })
    }

    componentDidMount() {
        this.props.getItemsCount(this.setItemsCount);

        this.props.onChange(ITEMS_PER_PAGE, this.state.count * ITEMS_PER_PAGE);
    }

    onChange(pageCount) {
        this.setState({ activePage: pageCount });
        this.props.onChange(ITEMS_PER_PAGE, pageCount * ITEMS_PER_PAGE);
    }

    renderButtons() {
        const pagesQuantity = Math.ceil(this.state.count / ITEMS_PER_PAGE);
        const pages = [];

        for(let i = 0; i < pagesQuantity; i++) {
            pages.push(i);
        }

        return pages.map(
            (pageNumber) => <PaginationElement
                key={pageNumber}
                active={pageNumber === this.state.activePage}
                onClick={() => this.onChange(pageNumber)}
                page={pageNumber} text={`Page ${pageNumber + 1}`}
            />
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}

export default PaginationContainer;