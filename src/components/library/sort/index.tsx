import React, { useState } from 'react';
import { SortContainer, SortSelect, SortOption } from './sort.styled';

const Sort = (
  { sortBy, sortDirection, handleSort }: {
    sortBy: string,
    sortDirection: string,
    handleSort: (sortBy: string, sortDirection: string) => void
  },
): JSX.Element => {
  const [sortByValue, setSortByValue] = useState<string>(sortBy);
  const [sortDirectionValue, setSortDirectionValue] = useState<string>(sortDirection);

  const handleSortByChange = (event: any) => {
    setSortByValue(event.target.value);
    handleSort(event.target.value, sortDirectionValue);
  };

  const handleSortDirectionChange = (event: any) => {
    setSortDirectionValue(event.target.value);
    handleSort(sortByValue, event.target.value);
  };

  return (
    <SortContainer>
      <SortSelect value={sortByValue} onChange={handleSortByChange}>
        <SortOption value="name">Sort by name</SortOption>
        <SortOption value="price">Sort by price</SortOption>
      </SortSelect>
      <SortSelect value={sortDirectionValue} onChange={handleSortDirectionChange}>
        <SortOption value="asc">Asc</SortOption>
        <SortOption value="desc">Desc</SortOption>
      </SortSelect>
    </SortContainer>
  );
};
export default Sort;
