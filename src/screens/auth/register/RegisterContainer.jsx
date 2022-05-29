import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../../actions';
import { ScreenContainer } from './RegisterContainer.styles';
import { RegisterPage } from './RegisterPage';
import { Header } from '../../../components/TopBar';
import { FullScreenSpinner } from '../../../components/Spinner';



export const RegisterContainer = () => {
    const dispatch = useDispatch();
    
    // application state
    const { error, registering } = useSelector(state => ({
        error: state.auth.error,
        registering: state.auth.registering,
    }));

    // component state
    const [data, setData] = useState({ fullname: '', email: '', password: '', passwordConfirm: '', submitted: false });


    /**
     * Method to save input data in state
     * 
     * @param {JSON Object} event Input event object with the target data
     */
     const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }, []);


    // Method to register user
    const handleSubmit = useCallback(() => {
        setData(prev => ({ ...prev, submitted: true }));

        if(data.fullname && data.email && data.password && (data.password === data.passwordConfirm)) {
            dispatch(authActions.register(data));
        }
    }, [data, dispatch]);


    return (
        <ScreenContainer id='screen'>

            <Header login={true} />

            <RegisterPage
                data={data}
                error={error}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            { registering && <FullScreenSpinner /> }
        </ScreenContainer>
    );
};