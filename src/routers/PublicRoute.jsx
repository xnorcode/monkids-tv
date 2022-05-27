import React from 'react';



/**
 * This component renders any given route component.
 */
 export const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props} />
    )} />
)