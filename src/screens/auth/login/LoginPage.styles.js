import styled from 'styled-components';
import { deviceConstants, colorConstants } from '../../../constants';


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 32px;
    
    color: ${colorConstants.black};
    font-weight: 500;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.div`
    width: 100%;
    padding: 32px;

    background: ${colorConstants.white};
    border-radius: 8px;

    & > * {
        margin-bottom: 24px;
    }

    & > *:last-child {
        margin-bottom: 0;
    }

    @media ${deviceConstants.tablet} { 
        width: 50%;
    }

    @media ${deviceConstants.laptop} { 
        width: 30%;
    }
`;

export const FormTitle = styled.div`
    width: 100%;
    font-size: 22px;
    text-align: center;
`;

export const Group = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GroupTitle = styled.div`
    width: 100%;
    margin-bottom: 4px;
`;

export const GroupInput = styled.input`
    width: 100%;
    padding: 8px 16px;
    background: ${colorConstants.verySoftGrey};
    border-radius: 4px;
    border: none;
`;

export const GroupWarning = styled.div`
    width: 100%;
    color: ${colorConstants.primary};
`;

export const Notification = styled.div`
    width: 100%;
    margin-bottom: 4px;
    text-align: center;
    color: ${colorConstants.primary};
`;

export const SubmitButton = styled.div`
    width: 75%;
    padding: 8px 48px;
    background: ${colorConstants.primary};
    border-radius: 4px;
    color: ${colorConstants.white};
    font-weight: 600;
    text-align: center;

    :hover {
        cursor: pointer;
        background: ${colorConstants.secondary};
        color: ${colorConstants.black};
    }
`;