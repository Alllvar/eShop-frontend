import React from 'react';
import NAV_NAMES from '../constants/navigation';
import '../styles/navigation.scss';

const renderNavNames = (data) => data.map(({ text, icon, className, id }) => (
    <li className={className} key={id}>
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
    </li>
));

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul className="navigation-container">
                    {renderNavNames(NAV_NAMES)}
                </ul>
                <div className="navigation-footer" />
            </div>
        )
    }
}

export default Navigation;