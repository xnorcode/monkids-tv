import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { ScreenContainer } from './AnimalContainer.styles';
import { AnimalPage } from './AnimalPage';
import { Header } from '../../components/TopBar';



export const AnimalContainer = () => {
    // get params and data
    const {id} = useParams();
    const {state} = useLocation();

    return (
        <ScreenContainer id='screen' >

            <Header />

            <AnimalPage id={id} type={state.data.type} />
        </ScreenContainer>
    );
};