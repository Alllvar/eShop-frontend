import React from 'react';
import '../styles/filter.scss';
import axios from 'axios';
import qs from 'qs';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.getProductsByCategories = this.getProductsByCategories.bind(this);
    }

    getProductsByCategories() {
        axios({
            method: 'get',
            url: 'http://localhost:8081/products',
            params: {
                categoryId: this.state.checkedItems
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
            .then((response) => {
                console.log(response.data)
            });
    }

    handleChange(e) {
        const id = e.target.value;
        const isChecked = e.target.checked;

        if(isChecked) {
            console.log('isChecked')
            return this.setState({
                checkedItems: [...this.state.checkedItems, id]
            }, this.getProductsByCategories);
        }
        console.log('!isChecked')
        return this.setState({
            checkedItems: this.state.checkedItems.filter(checkedId => checkedId !== id)
        }, this.getProductsByCategories);
    }

    renderFilterElements(data) {
        return data.map(({ name, _id }) => (
            <li className="filter-element" key={_id}>
                <label>
                    <input
                        type="checkbox"
                        value={_id}
                        checked={this.state.checkedItems.includes(_id)}
                        onChange={(e) => this.handleChange(e, name)}
                    />
                    {name}
                </label>
            </li>
        ));
    }
    render() {
        return (
            <div className="filter-list-container">
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Тип носителя</div>
                    <ul className="filter-list">
                        {this.renderFilterElements(this.props.categories)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Filter;