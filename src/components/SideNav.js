import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <Link to="/tables">Tables</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/charts">Charts</Link>
        </div>
    );
};

export default SideNav;
