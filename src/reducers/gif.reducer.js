import { gifReducerConstants } from '../constants';


export function gif(state = {}, action) {

  switch (action.type) {
    
    case gifReducerConstants.GET_REQUEST:
        return { loading: true };

    case gifReducerConstants.GET_SUCCESS: {
        const { loading, ...stateCopy } = state;
        return {
            ...stateCopy,
            gifs: action.gifs
        };
    }

    case gifReducerConstants.GET_FAILURE: {
        const { loading, ...stateCopy } = state;
        return {
            ...stateCopy,
            gifs: [],
            error: action.error,
        };
    }
        

    case gifReducerConstants.CLEAR_ALL:
        return {};

        
    default:
        return state;
  }
}