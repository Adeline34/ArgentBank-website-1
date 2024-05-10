import React, { useState } from 'react';

const EditUserInfoForm = ({ initialUsername, initialFirstName, initialLastName, onSubmit }) => {
  const [username, setUsername] = useState(initialUsername);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Edit user info</h2>
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
          />
        </div>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input className='input' 
            type="text" 
            id="firstName"
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="First name" 
            readOnly
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input className='input'
            type="text" 
            id="lastName"
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last name" 
            readOnly
          />
        </div>
      </div>
      <div className="buttons-container">
        <button className="transaction-button" type="submit">Save</button>
        <button className="transaction-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditUserInfoForm;