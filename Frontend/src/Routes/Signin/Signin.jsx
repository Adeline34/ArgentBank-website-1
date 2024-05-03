import React, { useState } from 'react';
import "./Signin.css";
import { getUsersLogin } from '../../actions/users.action';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.usersReducer);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(getUsersLogin({email, password}));
    navigate("/User");
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>      
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
            </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          {} 
        </form>
      </section>
    </main>
  );
}
