import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gifActions } from '../../actions';
import { ScreenContainer } from './HomeContainer.styles';
import { HomePage } from './HomePage';
import { Header } from '../../components/TopBar';
import { FullScreenSpinner } from '../../components/Spinner';
import { getRandomInt, history } from '../../utils';
import { sitemap } from '../../constants';



export const HomeContainer = () => {
    const dispatch = useDispatch();

    // application state
    const { gifs, loading } = useSelector(state => ({
        gifs: state.gif.gifs,
        loading: state.gif.loading,
    }));


    // component state
    const [selected, setSelected] = useState('');


    /**
     * Method to get a random set of gifs for a given animal from Giphy api
     * 
     * @param {String} animal The name of the animal
     */
    const handleGetGifs = useCallback((animal) => {
        if(animal === selected) {
            dispatch(gifActions.clear());
            setSelected('');
            return;
        };

        setSelected(animal);
        dispatch(gifActions.get(new URLSearchParams({ q: animal, limit: getRandomInt(30, 60), offset: getRandomInt(10, 200), rating: 'g' })));
    }, [selected, dispatch]);


    const handleOpenGif = useCallback((data) => {
        history.push(sitemap.animal + '/' + data.id,
        {
            data: {
                type: selected
            }
        });
    }, [selected]);


    return (
        <ScreenContainer id='screen' >

            <Header login={true} register={true} />

            <HomePage
                handleGetGifs={handleGetGifs}
                handleOpenGif={handleOpenGif}
                selected={selected}
                gifs={gifs}
                loading={loading}
            />

            { loading && <FullScreenSpinner /> }
        </ScreenContainer>
    );
};