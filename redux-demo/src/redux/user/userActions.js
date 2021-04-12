import * as type from './userType'

export const fetchUsersRequest = () => {
    return {
        type: type.FETCH_USERS_REQUEST
    };
}

export const fetchUsersSuccess = users => {
    return {
        type: type.FETCH_USERS_SUCCESS,
        payload : users
    };
}

export const fetchUsersFailer = error => {
    return {
        type: type.FETCH_USERS_FAILURE,
        payload : error
    };
}