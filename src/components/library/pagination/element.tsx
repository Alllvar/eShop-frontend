import React from 'react';
import { PaginationElement } from './types';

const PaginationElement = ({ active = false, onClick, text }: PaginationElement): JSX.Element => {
    return (
        <div className="pagination-container">
            <button
                className={active ? 'button': undefined}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
};

export default PaginationElement;