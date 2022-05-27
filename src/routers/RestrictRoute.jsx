import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { getLocalData } from '../utils';
import { sitemap } from '../constants';



/**
 * This component is used to restrict the login and register pages for logged in users
 * and redirect them to the home page.
 */
export const RestrictRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getLocalData('user')
            ? <Navigate to={{ pathname: sitemap.home, state: { from: props.location.pathname } }} />
            : <Component {...props} />
    )} />
)