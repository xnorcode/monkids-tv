import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { RestrictRoute } from './RestrictRoute';

import { HomeContainer } from '../screens/home';
import { RegisterContainer, LoginContainer, LogoutContainer } from '../screens/auth';
import { AnimalContainer } from '../screens/animal';
import { sitemap } from '../constants';


export const MainRouter = () => (
    <Fragment>
        <Routes>

            <Route exact path={sitemap.home} element={<HomeContainer />} />
            <Route exact path={sitemap.animal + '/:id'} element={<PrivateRoute component={AnimalContainer} />} />

            {/*** AUTH ROUTES ***/}
            <Route exact path={sitemap.register} element={<RestrictRoute component={RegisterContainer} />} />
            <Route exact path={sitemap.login} element={<RestrictRoute component={LoginContainer} />} />
            <Route exact path={sitemap.logout} element={<PrivateRoute component={LogoutContainer} />} />

            {/*** REDIRECT UNKNOWN ROUTES TO HOME ***/}
            <Route path='*' element={<Navigate replace to={sitemap.home} />} />

        </Routes>
    </Fragment>
)