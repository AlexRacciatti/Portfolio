/* IMPORTS */
import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { NavItems } from './NavItems';
import "./Navbar.css"

/* IMPORTS END */

class Navbar extends Component {



  render(){
    return (
      <nav className='top-nav-container'>
        <ul className='ul-container'>
          {NavItems.map((item, index)=>{
            return(
              <li key={item.name + index}>
                <a href={item.url} className={item.cName}>
                  <span>{ item.name }</span>{item.icon ? item.icon : ""}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
  
};

export default Navbar;
