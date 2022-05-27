import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
// import { RestrictRoute } from './RestrictRoute';

import { HomeContainer } from '../screens/home';
import { sitemap } from '../constants';


export const MainRouter = () => (
    <Fragment>
        <Routes>

            <Route path={sitemap.home} element={<HomeContainer />} />
            {/* <Route
                exact path={sitemap.animal}
                element={<PrivateRoute component={AnimalContainer} />}
            /> */}

            {/*** AUTH ROUTES ***/}
            {/* <RestrictRoute exact path={sitemap.login} component={LoginContainer} /> */}
            {/* <RestrictRoute exact path={sitemap.register} component={RegisterContainer} /> */}

            {/*** REDIRECT UNKNOWN ROUTES TO HOME ***/}
            <Route path='*' element={<Navigate replace to={sitemap.home} />} />

        </Routes>
    </Fragment>
)