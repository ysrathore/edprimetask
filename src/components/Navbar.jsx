import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {

    return (
        <div className='navbar'>
           <ul className='navbar_links'>
               <li>
                   <NavLink
                   exact
                   activeClassName="navbar_active_link"
                   to="/"
                   >
                       Home
                   </NavLink>
               </li>
              
               <li>
               <NavLink
                   activeClassName="navbar_active_link"
                   to="/authorList"
                   >
                    Author List
                   </NavLink>
               </li>
           </ul>
        </div>
    )
}

export default Navbar
