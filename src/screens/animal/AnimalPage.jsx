import React from 'react';

import {
    Container, PageTitle,
    Details, GifSection
} from './AnimalPage.styles';
import { GifGallery } from '../../components/Image';

import { contentAnimalPage } from '../../constants';



export const AnimalPage = ({ id, type }) => {

    return (
        <Container>
            <PageTitle>{contentAnimalPage.title}</PageTitle>

            <Details>ID: {id}</Details>
            {type && <Details>Type: {type}</Details>}

            <GifSection>
                <GifGallery data={[{id}]} />
            </GifSection>
        </Container>
    );
};