import React, { useEffect, useState } from 'react';
import './User.css';
import accountUser from './data.json';
import { useSelector, useDispatch } from 'react-redux';
import { users } from '../Signin/signinThunk';
import EditUserInfoForm from './EditUserInfoForm';

export default function User() {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

   const user = useSelector(state => state.users.data);
  const usersUsername = user ? `${user.firstName} ${user.lastName}` : "";

  const accounts = accountUser;

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveUserInfo = (userInfo) => {
    console.log(userInfo); 
    setIsEditing(false); 
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /> {usersUsername} !</h1>
        {isEditing ? (
          <EditUserInfoForm 
            initialFirstName={user.firstName} 
            initialLastName={user.lastName} 
            onSubmit={handleSaveUserInfo} 
          />
        ) : (
          <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>
        )}
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