import React, { useEffect, useState } from 'react';
import PaginationElement from './element';
import { ITEMS_PER_PAGE } from '../../../constants/pagination';
import { PaginationProps } from './types';

const Pagination = ({ getItemsCount, onChange }: PaginationProps): JSX.Element => {
    const [count, setCount] = useState(0);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        getItemsCount(setCount);
        onChange(ITEMS_PER_PAGE, count * ITEMS_PER_PAGE)
    }, []);

    const onPageChange = (pageCount: number) => {
        setActivePage(pageCount);
        onChange(ITEMS_PER_PAGE, pageCount * ITEMS_PER_PAGE);
    };

    const renderButtons = () => {
        const pagesQuantity = Math.ceil(count / ITEMS_PER_PAGE);
        const pages = [];

        for (let i = 0; i < pagesQuantity; i++) {
            pages.push(i);
        }

        return pages.map(
            (pageNumber) => <PaginationElement
                key={pageNumber}
                active={pageNumber === activePage}
                onClick={() => onPageChange(pageNumber)}
                text={`Page ${pageNumber + 1}`}
            />
        )
    };

    return (
        <>
            {renderButtons()}
        </>
    );
};

export default Pagination;