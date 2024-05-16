import React from 'react';
import "./Navbar.css";
import Logo from "../../assets/img/argentBankLogo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux';

export default function Navbar() {
  const user = useSelector((state) => state.signin.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  if (token) {
  return (
    <nav className="main-nav">
    <NavLink to="/" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>
      <nav>
        <NavLink to="/User" className="main-nav-item">
          <i className="fa-solid fa-circle-user"></i>
          {user ? user.userName : ""}
        </NavLink>
        <NavLink to="/" onClick={handleLogout} className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </nav>
    </div>
  </nav>
);
} else {
return (
  <nav className="main-nav">
    <NavLink to="/" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>
      <NavLink to="/Signin" className="main-nav-item">
        <i className="fa fa-circle-user"></i>
        Sign In
      </NavLink>
    </div>
  </nav>
);
}
}

 
