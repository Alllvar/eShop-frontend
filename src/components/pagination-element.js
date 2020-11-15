import React from 'react';
import '../styles/pagination-element.scss';

const ITEMS_PER_PAGE = 5;

class PaginationElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
        this.getPageData = this.getPageData.bind(this)
    }

    handleInputFocus = () => {
        this.setState({ active: true });
    };

    handleInputBlur = () => {
        this.setState({ active: false });
    };
    
    getPageData(pageNumber) {
        // console.log(pageNumber)

        this.props.onChange(ITEMS_PER_PAGE, ITEMS_PER_PAGE * pageNumber);
        const currentState = this.state.active;
        this.setState({ active: currentState });
    }

    
    render() {
        return (
            <div className="pagination-container">
                <button 
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur} 
                    className={this.state.active ? 'button': null} 
                    onClick={() => this.getPageData(this.props.page)}
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}

export default PaginationElement;