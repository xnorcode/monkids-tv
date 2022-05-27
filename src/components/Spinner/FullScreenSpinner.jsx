import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

import { colorConstants } from '../../constants';



const Container = styled.div`
    height: 100%;
    width: 100%;
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Opacity = styled.div`
    height: 100%;
    width: 100%;

    position: fixed;
    
    background: ${colorConstants.softGrey};
    opacity: 0.75;
`;

const StyledSpinner = styled(Spinner)`
    color: ${colorConstants.primary};
`;


export const FullScreenSpinner = () => {
    return (
        <Container>
            <Opacity />
            <StyledSpinner animation='border' />
        </Container>
    );
};