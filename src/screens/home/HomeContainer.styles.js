import styled from 'styled-components';

import { deviceConstants } from '../../constants';


export const ScreenContainer = styled.div`
    height: 100vh;
    padding-top: 64px;

    @media ${deviceConstants.tablet} { 
        padding-top: 88px;
    }

    @media ${deviceConstants.laptop} { 
        
    }

    @media ${deviceConstants.desktop} { 
        
    }
`;