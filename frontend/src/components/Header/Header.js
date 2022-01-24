import React from "react";
import img from '../../img/foto_cv.jpg';
import {Button} from '@mui/material'
import "./Header.css";

const Header = () => (
    <header className="header-container">
        <section className="header-topbar">
        <img src={img} alt="Alex Racciatti" className="fotito"></img>
        </section>
        <p>This is a paragraph</p>
    </header>
)

export default Header;