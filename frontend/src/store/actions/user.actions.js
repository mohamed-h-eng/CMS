import { fetchUsers } from '../../api/user.api';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const getUsers = () => async dispatch => {
  dispatch({ type: USERS_REQUEST });

  try {
    const result = await fetchUsers();
    dispatch({ type: USERS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
