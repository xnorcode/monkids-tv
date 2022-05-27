import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { getLocalData } from '../utils';
import { sitemap } from '../constants';



/**
 * This component renders a route component if the user is logged in,
 * otherwise it redirects the user to the login page. It works by checking if
 * there's a user object in the local storage.
 */
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getLocalData('user')
            ? <Component {...props} />
            : <Navigate to={{ pathname: sitemap.login, state: { from: props.location.pathname }, ...props.location }} />
    )} />
)