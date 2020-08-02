import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">My App</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/customers">Customers</NavLink>
            <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
        </div>
    </nav>
    );
}
 
export default NavBar;