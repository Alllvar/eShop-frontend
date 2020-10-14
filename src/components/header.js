import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import '../styles/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <div className="logo" />
                </div>
                <div className="header-right-container">
                    <div className="header-search-container">
                        <VscSearch className="search" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;