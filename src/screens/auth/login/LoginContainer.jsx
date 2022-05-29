import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../../actions';
import { ScreenContainer } from './LoginContainer.styles';
import { LoginPage } from './LoginPage';
import { Header } from '../../../components/TopBar';
import { FullScreenSpinner } from '../../../components/Spinner';



export const LoginContainer = () => {
    const dispatch = useDispatch();
    
    // application state
    const { error, loggingIn } = useSelector(state => ({
        error: state.auth.error,
        loggingIn: state.auth.loggingIn,
    }));

    // component state
    const [data, setData] = useState({ username: '', password: '', submitted: false });


    /**
     * Method to save input data in state
     * 
     * @param {JSON Object} event Input event object with the target data
     */
     const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }, []);


    // Method to login user
     const handleLogin = useCallback(() => {
        if(!data.username || !data.password) return;
        setData(prev => ({ ...prev, submitted: true }));
        dispatch(authActions.login(data));
    }, [data, dispatch]);


    return (
        <ScreenContainer id='screen'>

            <Header register={true} />

            <LoginPage
                data={data}
                error={error}
                handleChange={handleChange}
                handleLogin={handleLogin}
            />

            { loggingIn && <FullScreenSpinner /> }
        </ScreenContainer>
    );
};