import { combineReducers } from 'redux';

import { gif } from './gif.reducer';
import { auth } from './auth.reducer';


const rootReducer = combineReducers({
    gif,
    auth,
});

export default rootReducer;