import styled from 'styled-components';

import { colorConstants } from '../../constants';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    margin-top: 24px;
    font-size: 22px;
    font-weight: 600;
    color: ${colorConstants.primary};
    text-align: center;
`;

const Text = styled.div`
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    color: ${colorConstants.white};
    text-align: center;
`;



export const EmptyStateScreen = ({ icon: Icon, title, text }) => {

    return (
        <Container>
            {Icon && <Icon color={colorConstants.white} size={200} />}
            {title && <Title>{title}</Title>}
            {text && <Text>{text}</Text>}
        </Container>
    );
};