import React from 'react';
import '../styles/pagination-element.scss';

class PaginationElement extends React.Component {
    render() {
        return (
            <div className="pagination-container">
                <button
                    className={this.props.active ? 'button': null}
                    onClick={this.props.onClick}
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}

export default PaginationElement;