import styled from 'styled-components';

import { deviceConstants, colorConstants } from '../../constants';


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

export const GifSection = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ControlsSection = styled.div`
    margin-top: 32px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
        margin-right: 8px;
    }

    & > *:last-child {
        margin-right: 0;
    }
`;

export const Button = styled.div`
    width: 72px;
    height: 80px;

    background: ${({ active }) => active ? colorConstants.primary : 'none'};
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        color: ${({ active }) => active ? colorConstants.white : colorConstants.primary};
        font-size: ${({ active }) => active ? '40px' : '32px'};
    }

    :hover {
        cursor: pointer;

        .icon {
            font-size: 48px;
        }

        ${({ active }) => !active && `
            background: ${colorConstants.secondary};

            .icon {
                fill: ${colorConstants.white};
            }
        `}
    }

    @media ${deviceConstants.tablet} { 
        width: 88px;
        height: 96px;

        .icon {
            font-size: ${({ active }) => active ? '48px' : '40px'};
        }

        :hover {
            .icon {
                font-size: 56px;
            }
        }
    }
`;