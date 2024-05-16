import React, { useState } from 'react';
import './User.css';
import accountUser from './data.json';
import EditUserInfoForm from './EditUserInfoForm'; 

import { useSelector } from 'react-redux';


const accounts = accountUser;

export default function User() {
  const [editing, setEditing] = useState(false);
  const user = useSelector((state) => state.signin.user);

  const handleNameEdit = () => {
    setEditing(true);
  };

  const fullname = user ? `${user.firstName} ${user.lastName}` : "";

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back <br /> {fullname} !</h1>
        <button className="edit-button" onClick={handleNameEdit}>Edit Name</button>
        {editing && <EditUserInfoForm onClose={() => setEditing(false)} />}
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