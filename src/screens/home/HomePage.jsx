import React from 'react';
import { GiCat, GiSittingDog, GiElephant, GiLion, GiMonkey } from 'react-icons/gi';
import { BiMoviePlay } from 'react-icons/bi';

import {
    Container, PageTitle,
    ControlsSection, Button,
    GifSection
} from './HomePage.styles';
import { GifGallery } from '../../components/Image';
import { EmptyStateScreen } from '../../components/EmptyState';

import { contentHomepage } from '../../constants';



export const HomePage = ({
    handleGetGifs,
    selected,
    gifs,
    loading,
}) => {

    const hasGifs = gifs && gifs.length > 0;

    return (
        <Container>
            <PageTitle>{contentHomepage.title}</PageTitle>

            <GifSection>
                { hasGifs && <GifGallery data={gifs} /> }
                
                { !hasGifs && !loading &&
                <EmptyStateScreen
                    title={contentHomepage.emptyState.title}
                    text={contentHomepage.emptyState.text}
                    icon={BiMoviePlay} /> }
            </GifSection>

            <ControlsSection>
                <Button active={selected === 'cat'} onClick={() => handleGetGifs('cat')}>
                    <GiCat className='icon' />
                </Button>

                <Button active={selected === 'dog'} onClick={() => handleGetGifs('dog')}>
                    <GiSittingDog className='icon' />
                </Button>

                <Button active={selected === 'elephant'} onClick={() => handleGetGifs('elephant')}>
                    <GiElephant className='icon' />
                </Button>

                <Button active={selected === 'lion'} onClick={() => handleGetGifs('lion')}>
                    <GiLion className='icon' />
                </Button>

                <Button active={selected === 'monkey'} onClick={() => handleGetGifs('monkey')}>
                    <GiMonkey className='icon' />
                </Button>
            </ControlsSection>
        </Container>
    );
};