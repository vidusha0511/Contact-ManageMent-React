import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./Header.css"

const Header = (props) => {
    const { branding } = props;
    
    return(
        <nav className="navbar navbar-expand-sm bg-success mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home
                            <i className="fas fa-home p-2"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">Add
                            <i className="fas fa-plus p-2"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About
                            <i className="fas fa-question p-2"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;