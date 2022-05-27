import { gifReducerConstants } from '../constants';
import { gifService } from '../services';


export const gifActions = {
    get,
    clear,
};



function get(query) {
    return async dispatch => {
        dispatch(request());

        await gifService.get(query)
            .then(
                gifs => dispatch(success(gifs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: gifReducerConstants.GET_REQUEST } }
    function success(gifs) { return { type: gifReducerConstants.GET_SUCCESS, gifs } }
    function failure(error) { return { type: gifReducerConstants.GET_FAILURE, error } }
}

function clear() {
    return { type: gifReducerConstants.CLEAR_ALL };
}