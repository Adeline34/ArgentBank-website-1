import { signinRequest, signinSuccess, signinFailure } from '../../redux.js';
import { usersSuccess, usersFailure } from '../../redux.js';

//Connecter users
export const signin = (email, password) => async (dispatch) => {
  dispatch(signinRequest());
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('token', data.body.token);
      dispatch(signinSuccess(data.body.token));
      dispatch(users());
      return { success: true, token: data.body.token };
    } else {
      const error = await response.text();
      dispatch(signinFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(signinFailure(error.message));
    return { success: false, error: error.message };
  }
};



//Récupérer users
export const users = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return;
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(usersSuccess(data.body));
      return { success: true, data:data.body };
    } else {
      const error = await response.text();
      dispatch(usersFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(usersFailure(error.message));
    return { success: false, error: error.message };
  }
};

//Edit name 
export const Editusername = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return;
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(usersSuccess(data.body));
      return { success: true, data:data.body };
    } else {
      const error = await response.text();
      dispatch(usersFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(usersFailure(error.message));
    return { success: false, error: error.message };
  }
};

 