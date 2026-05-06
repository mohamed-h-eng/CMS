import { USERS_FAILURE, USERS_REQUEST, USERS_SUCCESS } from '../actions/user.actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case USERS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
