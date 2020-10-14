import React from 'react';
import { TYPE_NAMES } from '../constants/filter';
import '../styles/filter.scss';

const renderFilterElements = (data) => data.map(({ text, id }) => (
    <li className="filter-element" key={id}>
        <label>
            <input type="checkbox" value={text} />
            {text}
        </label>
    </li>
));

class Filter extends React.Component {
    render() {
        return (
            <div className="filter-list-container">
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Тип носителя</div>
                    <ul className="filter-list">
                        {renderFilterElements(TYPE_NAMES)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Filter;