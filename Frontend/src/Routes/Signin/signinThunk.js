import { userSuccess, userFailure, userError, signinRequest } from '../../redux.js';

export const signin = (email, password) => async (dispatch) => {
  dispatch(signinRequest())
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
      dispatch(userSuccess(data.body.token));
      dispatch(signin());
      return { success: true, token: data.body.token };
    } else {
      const error = await response.text();
      // sessionStorage.removeItem("token");
      dispatch(userFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(userFailure(error.message));
    return { success: false, error: error.message };
  }
};

export const userProfile = () => async (dispatch) => {
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
      dispatch(userSuccess(data.body));
      return { success: true, data: data.body };
    } else {
      const error = await response.text();
      dispatch(userFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(userFailure(error.message));
    return { success: false, error: error.message };
  }
};

export const editUsername = (newUsername) => async (dispatch) => {
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
      body: JSON.stringify({ newUsername }),
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(userSuccess(data.body));
      return { success: true, data: data.body };
    } else {
      const error = await response.text();
      dispatch(userFailure(error));
      return { success: false, error };
    }
  } catch (error) {
    dispatch(userError(error.message));
    return { success: false, error: error.message };
  }
};
