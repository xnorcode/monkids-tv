import { authReducerConstants, sitemap } from '../constants';
import { authService } from '../services';
import { history } from '../utils';


export const authActions = {
    register,
    login,
    logout,
};



function register(data) {
    return async dispatch => {
        dispatch(request());

        await authService.register(data)
            .then(
                () => {
                    dispatch(success());
                    history.push(sitemap.login);
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: authReducerConstants.REGISTER_REQUEST } }
    function success() { return { type: authReducerConstants.REGISTER_SUCCESS } }
    function failure(error) { return { type: authReducerConstants.REGISTER_FAILURE, error } }
}

function login(data) {
    return async dispatch => {
        dispatch(request());

        await authService.login(data)
            .then(
                () => {
                    dispatch(success());
                    history.push(sitemap.home);
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: authReducerConstants.LOGIN_REQUEST } }
    function success() { return { type: authReducerConstants.LOGIN_SUCCESS } }
    function failure(error) { return { type: authReducerConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        authService.logout()
                .then(() => dispatch({ type: authReducerConstants.LOGOUT }))
                .then(() => history.push(sitemap.login));
    };
}