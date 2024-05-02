import { GET_USERS } from "../actions/users.action";

const initialeState = {};

export default function usersReducer(state = initialeState, action) {
  switch (action.type) {
    case GET_USERS:
        return action.payload;
    default:
        return state;
  }
    }
