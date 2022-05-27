import { combineReducers } from 'redux';

import { gif } from './gif.reducer';


const rootReducer = combineReducers({
    gif,
});

export default rootReducer;