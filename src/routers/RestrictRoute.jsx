import React from 'react';
import { Navigate } from 'react-router-dom';

import { getLocalData } from '../utils';
import { sitemap } from '../constants';



/**
 * This component is used to restrict the login and register pages for logged in users
 * and redirect them to the home page.
 */
export const RestrictRoute = ({ component: Component }) => {
    return getLocalData('user') ? <Navigate replace to={sitemap.home} /> : <Component />;
};