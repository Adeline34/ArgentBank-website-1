import React, { useState } from 'react';
import "./Signin.css";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from './signinThunk';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector(state => state.signin);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password)).then((result) => {
      if (result.success) {
        // Redirection vers la page d'accueil en cas de succès de la connexion
        navigate('/User');
      }
    });
  };
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>      
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" disabled={loading}>Sign In</button>
          {error && <div>Error: {error}</div>}
        </form>
      </section>
    </main>
  );
}
