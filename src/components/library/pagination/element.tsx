import React from 'react';
import type { PaginationElement as PaginationElementType } from './types';
import { Button } from './pagination.styled';


const PaginationElement = ({ active = false, onClick, text }: PaginationElementType): JSX.Element => {
    return (
        <div className="pagination-container">
            <Button
                className={active ? 'button': undefined}
                onClick={onClick}
            >
                {text}
            </Button>
        </div>
    )
};

export default PaginationElement;