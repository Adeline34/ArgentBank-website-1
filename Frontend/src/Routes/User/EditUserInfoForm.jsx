import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUsername, userProfile } from '../Signin/signinThunk'; 

const EditUserInfoForm = ({ onClose }) => {
  const user = useSelector((state) => state.signin.user);
  const [newUsername, setNewUsername] = useState(user.username); 

  const dispatch = useDispatch();

  const handleEditUsername = async () => {
    try {
      await dispatch(editUsername(newUsername)); 
      await dispatch(userProfile()); 
      onClose();
    } catch (error) {
      console.error('Error editing username:', error);
    }
  };

  const handleCancel = () => {
    setNewUsername(user.username);
  };

  return (
    <form className="form-container">
      <h2>Edit user info</h2>
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"
            value={newUsername} 
            onChange={(e) => setNewUsername(e.target.value)} 
            placeholder="Username" 
          />
        </div>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input className='input' 
            type="text" 
            id="firstName"
            value={user.firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="First name" 
            disabled
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input className='input'
            type="text" 
            id="lastName"
            value={user.lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last name" 
            disabled
          />
      </div>
      </div>
      <div className="buttons-container">
        <button className="transaction-button" type="button" onClick={handleEditUsername}>Save</button>
        <button className="transaction-button" type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditUserInfoForm;