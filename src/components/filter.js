import React from 'react';
import { COMPATIBILITY_NAMES, TYPE_NAMES, AVAILABILITY_NAMES, NINTENDO_SWITCH, PRICE_NAMES, DLC_NAMES, SYSTEM_NAMES, GENRE_NAMES, EPISODE_NAMES, AGE_NAMES, FEATURE_NAMES, MULTIPLAYER_NAMES, LANGUAGE_NAMES, CONTROLLER_NAMES } from '../constants/filter';
import '../assets/styles/filter.scss';

const renderFilterElements = (data) => data.map(({text}) => (
    <li className="filter-element">
        <label>
            <input type="checkbox" value={text}></input>
            {text}
        </label>
    </li>
));

class Filter extends React.Component {
    render() {
        return (
            <div className="filter-list-container">
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Совместимость</div>
                    <ul className="filter-list">
                        {renderFilterElements(COMPATIBILITY_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Тип носителя</div>
                    <ul className="filter-list">
                        {renderFilterElements(TYPE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Доступность</div>
                    <ul className="filter-list">
                        {renderFilterElements(AVAILABILITY_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Сниженная цена (Nintendo Switch)</div>
                    <ul className="filter-list">
                        {renderFilterElements(NINTENDO_SWITCH)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Цена (Nintendo Switch)</div>
                    <ul className="filter-list">
                        {renderFilterElements(PRICE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Демоверсии и DLC</div>
                    <ul className="filter-list">
                        {renderFilterElements(DLC_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Изначальная система</div>
                    <ul className="filter-list">
                        {renderFilterElements(SYSTEM_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Жанр</div>
                    <ul className="filter-list">
                        {renderFilterElements(GENRE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Серия</div>
                    <ul className="filter-list">
                        {renderFilterElements(EPISODE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Возраст игрока</div>
                    <ul className="filter-list">
                        {renderFilterElements(AGE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Особенности</div>
                    <ul className="filter-list">
                        {renderFilterElements(FEATURE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Мультиплеер</div>
                    <ul className="filter-list">
                        {renderFilterElements(MULTIPLAYER_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">языки</div>
                    <ul className="filter-list">
                        {renderFilterElements(LANGUAGE_NAMES)}
                    </ul>
                </div>
                <div className="filter-wrap">
                    <div className="filter-wrap-title">Контроллеры</div>
                    <ul className="filter-list">
                        {renderFilterElements(CONTROLLER_NAMES)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Filter;