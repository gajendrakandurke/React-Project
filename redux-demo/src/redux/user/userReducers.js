import { fetchUsersRequest } from './userActions'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload, error : '' }
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, users : [], error: action.payload }
        default: return state
    }
};

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }

export default reducer