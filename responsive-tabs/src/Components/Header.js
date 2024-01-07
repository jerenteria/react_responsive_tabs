import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
    return (
        <Fragment>
            <div>
            <h1 className="header">Welcome to my practice site!</h1>
            </div>
            <div className="github-link">
            <button>Checkout Gitbub</button>
            </div>
        </Fragment>
    );
};

export default Header;