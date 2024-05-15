import React from 'react';
import { useDispatch } from 'react-redux';
import { editUsername, userProfile } from '../Signin/signinThunk';

const EditUserInfoForm = ({ onClose }) => {
  const user = useSelector((state) => state.signin.user);
  const [ newUsername, setUsername] = useState(user.newUsername);
  const dispatch = useDispatch();

  const handleEditusername = async () => {
    try {
      dispatch ( editUsername(newUsername));
      dispatch (userProfile());
      onClose();
    } catch (error) {
      console.error('error');
    }
  };

  const handleCancel = () => {
    setUsername(user.newUsername);
    onClose();
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ username, firstName, lastName });
  // };onSubmit={handleSubmit}


  return (
    <form  className="form-container">
      <h2>Edit user info</h2>
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"
            value={newUsername} 
            onChange={(e) => setUsername(e.target.value)} 
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
        <button className="transaction-button" type="submit" onClick={handleEditusername}>Save</button>
        <button className="transaction-button" type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditUserInfoForm;
