/* IMPORTS */
import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavItems } from './NavItems';
import { Link } from 'react-router-dom';
import "./Header.css"

/* IMPORTS END */

class Header extends Component {
  constructor(props){
    super(props);
    this.state= {
      clicked: false
    };
  };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }


  render(){
    return (
      <header className='top-nav-container'>
        <div className='main-heading'>
          <Link to='/'>
            <h1>Alex Racciatti</h1>
            <h3>Full Stack Web Developer</h3>
          </Link>
        </div>
        <nav className='navbar'>
          <div className='hamburger-menu' onClick={this.handleClick}>
            {this.state.clicked ? <MenuOpenIcon fontSize='large'/> : <MenuIcon fontSize='large'/>} 
          </div>
          <ul className={this.state.clicked ? 'ul-container mobile' : 'ul-container'}>
            {NavItems.map((item, index)=>{
              return(
                <li key={item.name + index}>
                  <Link to={item.url} className={item.cName}>
                  {item.icon ? item.icon : ""}<span className={item.spanCName}>{ item.name }</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    );
  }
  
};

export default Header;
