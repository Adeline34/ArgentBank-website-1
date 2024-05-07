import { signinRequest, signinSuccess, signinFailure } from "../../redux";

export const signin = (email, password) => async dispatch => {
    dispatch(signinRequest());
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login",{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        dispatch(signinSuccess(data.user));
    } catch (error) {
        dispatch(signinFailure(error.message));
    }
};
