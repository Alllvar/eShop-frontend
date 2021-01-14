import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import logo from '../assets/images/header-logo.png';
import '../styles/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} width="128" />
                <div className="search-container">
                    <VscSearch className="search" />
                </div>
            </div>
        )
    }
}

export default Header;