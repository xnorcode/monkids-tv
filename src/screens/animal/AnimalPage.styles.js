import styled from 'styled-components';

import { colorConstants } from '../../constants';


export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.div`
    margin: 32px 0;

    font-size: 38px;
    font-weight: 600;
    color: ${colorConstants.primary};
`;

export const Details = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: ${colorConstants.white};
`;

export const GifSection = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;