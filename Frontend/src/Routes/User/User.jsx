import React from 'react';
import './User.css';
import accountUser from './data.json';
import { useSelector } from "react-redux";

export default function User() {
  
  const user = useSelector((state) => state.usersReducer);

  const accounts = accountUser;
  return (
    <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back<br /> {user.firstName} !</h1>
      <button className="edit-button">Edit Name</button>
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
