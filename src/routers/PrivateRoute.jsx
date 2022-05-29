import React from 'react';
import { Navigate } from 'react-router-dom';

import { getLocalData } from '../utils';
import { sitemap } from '../constants';



/**
 * This component renders a route component if the user is logged in,
 * otherwise it redirects the user to the login page. It works by checking if
 * there's a user object in the local storage.
 */
export const PrivateRoute = ({ component: Component }) => {
    return getLocalData('user') ? <Component /> : <Navigate replace to={sitemap.login} />;
};