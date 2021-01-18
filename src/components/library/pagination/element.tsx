import React from 'react';
import type { PaginationElement as PaginationElementType } from './types';

const PaginationElement = ({ active = false, onClick, text }: PaginationElementType): JSX.Element => {
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