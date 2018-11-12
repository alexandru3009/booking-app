import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <header>
        <NavLink to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/register" activeClassName="is-active">  Register account  </NavLink>
        <NavLink to="/login" activeClassName="is-active">Login</NavLink>
        <NavLink to="/recover" activeClassName="is-active">  Recover Password  </NavLink>
    </header>
);

export default Navigation;