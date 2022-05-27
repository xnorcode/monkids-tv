import { createBrowserHistory } from 'history';



/**
 * Custom history object to allow redirecting users from outside
 * a React component, for example, within an action after a user
 * has successfully loged in or registered.
 */
export const history = createBrowserHistory();