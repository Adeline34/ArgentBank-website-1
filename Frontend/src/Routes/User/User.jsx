import React, { useEffect } from 'react';
import './User.css';
import accountUser from './data.json';
import { useSelector, useDispatch } from 'react-redux';
import { users } from '../Signin/signinThunk';

export default function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);
  
  const user = useSelector(state => state.users.data);
  const usersUsername = user ? `${user.firstName} ${user.lastName}` : "";

  const accounts = accountUser;
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /> {usersUsername} !</h1>
        <button className="edit-button" > Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <section key={index} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account["account-title"]}</h3>
            <p className="account-amount">{account["account-amount"]}</p>
            <p className="account-amount-description">{account["account-amount-description"]}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </main>
  );
}
