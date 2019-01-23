import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="main-nav-bar">
      <div className="logo-and-search">
        <p>Logo</p>
        <p>Search Bar Goes Here</p>
      </div>
      <div className='nav-bar-buttons'>
        <i>{props.user.first_name[0]}</i>
        <div className='logout-dropdown'>
          <button onClick={props.logout}>Logout</button>
        </div>
      </div>
    </div>
  )
};

export default NavBar;