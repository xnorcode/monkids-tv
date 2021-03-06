// auth constants for redux reducer
export const authReducerConstants = {
    REGISTER_REQUEST: 'AUTH_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'AUTH_REGISTER_FAILURE',

    LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',
    
    LOGOUT: 'AUTH_LOGOUT',
};


// gif constants for redux reducer
export const gifReducerConstants = {
    GET_REQUEST: 'GIFS_GET_REQUEST',
    GET_SUCCESS: 'GIFS_GET_SUCCESS',
    GET_FAILURE: 'GIFS_GET_FAILURE',

    CLEAR_ALL: 'GIFS_CLEAR_ALL',
};