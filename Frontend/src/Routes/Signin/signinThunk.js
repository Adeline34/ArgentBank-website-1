import { signinRequest, signinSuccess, signinFailure } from "../../redux";

export const signin = (email, password) => async dispatch => {
    dispatch(signinRequest());
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Stocker le token dans le local storage
        localStorage.setItem('token', data.token);
        dispatch(signinSuccess(data.token));
        return { success: true, token: data.token }; // Return token in payload
      } else {
        const error = await response.text();
        dispatch(signinFailure(error));
        return { success: false, error }; // Return error
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
      return { success: false, error: error.message }; // Return error
    }
  };
  