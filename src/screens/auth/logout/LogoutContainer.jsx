import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../../../actions';



export const LogoutContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.logout());
    }, []);

    return null;
};