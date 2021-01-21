import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../index';

test('pagination generates as many page buttons as needed', () => {
  const mockedProps = {
    total: 1,
    onChange: () => {},
    page: 1,
    perPage: 1,
  };

  const { rerender, container } = render(<Pagination {...mockedProps} />);

  expect(container.children.length).toBe(1);

  rerender(<Pagination {...mockedProps} total={2} />);

  expect(container.children.length).toBe(2);
});
