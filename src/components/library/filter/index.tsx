import React, { useState } from 'react';
import { FilterProps, FilterElement } from './types';
import {
  FilterLiElement,
  FilterListContainer,
  Label,
  Input,
  FilterList,
} from './filter.styled';

const Filter = ({ handleFilterClick, categories }: FilterProps): JSX.Element => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      const result = [...checkedItems, id];

      setCheckedItems(result);

      return handleFilterClick(result);
    }

    const result = checkedItems.filter((checkedId: string) => checkedId !== id);

    setCheckedItems(result);

    return handleFilterClick(result);
  };

  const renderFilterElements = (data: FilterElement[]) => data.map(({ name, _id }) => (
    <FilterLiElement key={_id}>
      <Label>
        <Input
          type="checkbox"
          value={_id}
          checked={checkedItems.includes(_id)}
          onChange={(e) => { handleChange(e); }}
        />
        {name}
      </Label>
    </FilterLiElement>
  ));

  return (
    <FilterListContainer>
      <h1>My filter</h1>
      <FilterList>
        {renderFilterElements(categories)}
      </FilterList>
    </FilterListContainer>
  );
};

export default Filter;
