import React, {  useState } from 'react';
import { FilterProps, FilterElement } from './types';

const Filter = ({ handleFilterClick, categories }: FilterProps): JSX.Element => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.value;
        const isChecked = e.target.checked;

        if(isChecked) {
            const result = [...checkedItems, id];

            setCheckedItems(result);

            return handleFilterClick(result)
        }

        const result = checkedItems.filter((checkedId: string) => checkedId !== id);

        setCheckedItems(result);

        return handleFilterClick(result);
    };

    const renderFilterElements = (data: FilterElement[]) => {
        return data.map(({ name, _id }) => (
            <li className="filter-element" key={_id}>
                <label>
                    <input
                        type="checkbox"
                        value={_id}
                        checked={checkedItems.includes(_id)}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {name}
                </label>
            </li>
        ));
    };

    return (
        <div className="filter-list-container">
            <div className="filter-wrap">
                <div className="filter-wrap-title">Тип носителя</div>
                <ul className="filter-list">
                    {renderFilterElements(categories)}
                </ul>
            </div>
        </div>
    )
};

export default Filter;