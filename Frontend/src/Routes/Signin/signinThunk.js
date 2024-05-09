import { signinRequest, signinSuccess, signinFailure } from '../../redux.js';
import { usersRequest, usersSuccess, usersFailure } from '../../redux.js';

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
        localStorage.setItem('token', data.token);
        dispatch(signinSuccess(data.token));
        return { success: true, token: data.token };
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
  
  export const users = (firstName, lastName) => async (dispatch) => {
    dispatch(usersRequest());
    try {
      const token = localStorage.getItem('token'); // Récupérer le token du local storage
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}` // Ajouter le token dans l'en-tête Authorization
        },
        body: JSON.stringify({ firstName, lastName}),
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(usersSuccess(data)); // Dispatch de l'action usersSuccess avec les données du profil utilisateur
        return { success: true, data };
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