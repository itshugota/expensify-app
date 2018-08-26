import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink></p>
    </header>
);

export default Header;