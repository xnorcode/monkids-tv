import { authReducerConstants } from '../constants';


export function auth(state = {}, action) {

  switch (action.type) {
    
    case authReducerConstants.REGISTER_REQUEST:
      return { registering: true };

    case authReducerConstants.REGISTER_SUCCESS:
      return {};

    case authReducerConstants.REGISTER_FAILURE:
      return { error: action.error };
    

    case authReducerConstants.LOGIN_REQUEST:
      return { loggingIn: true };

    case authReducerConstants.LOGIN_SUCCESS:
      return { cookie: action.cookie };

    case authReducerConstants.LOGIN_FAILURE:
        return { error: action.error };
    

    case authReducerConstants.LOGOUT:
      return {};

    
    default:
        return state;
  }
}