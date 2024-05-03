export const GET_USERS_LOGIN = "GET_USERS_LOGIN"
export const LOGIN_FAILED = "LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";


// Action to manage the success user login
export const getUsersLogin = (userData) => ({
  type: GET_USERS_LOGIN,
  payload: userData,
});

// Action to manage the user login failed
export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

// Action to manage user disconnection
export const userLogout = () => {
  sessionStorage.removeItem("token");
  return {
    type: USER_LOGOUT,
  };
};

export const login = (email, password, navigate) => {
    return async (dispatch) => {
        try{
            const userData = {email, password };

            const reponse =await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            
      if (response.status === 200) {
        const token = data.body.token;
        sessionStorage.setItem("token", token);
        navigate("/User");
        dispatch(getUsersLogin(userData));
      } else if (response.status === 400 || response.status === 401) {
        sessionStorage.removeItem("token");
        dispatch(
          loginFailed("Invalide Email or Password. Please Try again")
        );
      }
    } catch (error) {
      dispatch(loginFailed("Invalid Email or Password. Please retry"));
        }
    };
};
