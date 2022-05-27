import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gifActions } from '../../actions';
import { ScreenContainer } from './HomeContainer.styles';
import { HomePage } from './HomePage';
import { FullScreenSpinner } from '../../components/Spinner';
import { getRandomInt } from '../../utils';



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
    function handleGetGifs(animal) {
        if(animal === selected) {
            dispatch(gifActions.clear());
            setSelected('');
            return;
        };

        setSelected(animal);
        dispatch(gifActions.get(new URLSearchParams({ q: animal, limit: getRandomInt(30, 60), offset: getRandomInt(10, 200), rating: 'g' })));
    }


    return (
        <ScreenContainer id='screen' >

            <HomePage
                handleGetGifs={handleGetGifs}
                selected={selected}
                gifs={gifs}
            />

            { loading && <FullScreenSpinner /> }
        </ScreenContainer>
    );
};