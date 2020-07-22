import React from 'react';


const NavBar = ({totalItems}) =>{
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href='#'>Number of items : {totalItems}</a>
            </nav>
        );
}
 
export default NavBar;