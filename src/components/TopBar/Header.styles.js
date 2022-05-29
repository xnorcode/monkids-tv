import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { deviceConstants, colorConstants } from '../../constants';


export const Container = styled.div`
    height: 56px;
    padding: 16px;
    z-index: 99;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${deviceConstants.tablet} { 
        height: 80px;
    }
`;

export const Logo = styled(Link)`
    font-size: 18px;
    font-weight: 700;
    color: ${colorConstants.primary};
    text-decoration: none;

    :hover {
        cursor: pointer;
        color: ${colorConstants.white};
    }
`;

export const Menu = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > * {
        margin-right: 16px;
    }

    & > *:last-child {
        margin-right: 0;
    }

    @media ${deviceConstants.tablet} { 
        & > * {
            margin-right: 40px;
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }
`;

export const MenuItem = styled(Link)`
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    color: ${colorConstants.softWhite};

    :hover {
        cursor: pointer;
        color: ${colorConstants.primary};
    }
`;