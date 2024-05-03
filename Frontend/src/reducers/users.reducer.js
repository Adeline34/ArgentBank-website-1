import { GET_USERS_LOGIN } from "../actions/users.action";

const initialeState = {};

export default function usersReducer(state = initialeState, action) {
  switch (action.type) {
    case GET_USERS_LOGIN:
        return {
          ...state,
          ...action.payload
        };
    default:
        return state;
  }
    }
