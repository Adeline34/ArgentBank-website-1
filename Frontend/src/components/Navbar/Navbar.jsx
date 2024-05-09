import React from 'react';
import "./Navbar.css";
import Logo from "../../assets/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";


export default function Navbar() {


  return (
    <nav className="main-nav">
    <a className="main-nav-logo" href="./index.html">
      <img
        className="main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
    <NavLink to="/Signin" className="main-nav-item" >
        <i className="fa fa-user-circle"></i>
        Sign In
        </NavLink>
    </div>
  </nav>
  )
}
