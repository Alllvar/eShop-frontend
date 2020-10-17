import React from 'react';
import '../styles/filter.scss';

const renderFilterElements = (data) => data.map(({ name, id }) => (
    <li className="filter-element" key={id}>
        <label>
            <input type="checkbox" value={name} />
            {name}
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
                        {renderFilterElements(this.props.categories)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Filter;