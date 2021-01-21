import React from 'react';
import PaginationElement from './element';
import type { PaginationProps } from './types';

const Pagination = ({
  total, onChange, page, perPage,
}: PaginationProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onPageChange = (page: number) => {
    onChange(page);
  };

  const renderButtons = () => {
    const pagesQuantity = Math.ceil(total / perPage);
    const pages = [];

    for (let i = 0; i < pagesQuantity; i += 1) {
      pages.push(i);
    }

    return pages.map(
      (pageNumber) => (
        <PaginationElement
          key={pageNumber + 1}
          active={pageNumber + 1 === page}
          onClick={() => onPageChange(pageNumber + 1)}
          text={`Page ${pageNumber + 1}`}
        />
      ),
    );
  };

  return (
    <>
      {renderButtons()}
    </>
  );
};

export default Pagination;
