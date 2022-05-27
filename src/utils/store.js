import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';



/**
 * Method used by redux store to create a central redux state store for
 * the entire react app.
 */
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
);