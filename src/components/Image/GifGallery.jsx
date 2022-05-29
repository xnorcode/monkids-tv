import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useWindowSize } from '../../utils/hooks';
import { deviceConstants } from '../../constants';


const Container = styled.div`
    height: ${({ maxheight }) => maxheight || '100%'};
    width: ${({ maxwidth }) => maxwidth || '100%'};

    :hover {
        cursor: pointer;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
`;



export const GifGallery = ({ data, onClick }) => {
    const [active, setActive] = useState(0); // shows first gif by default
    const [counter, setCounter] = useState(5); // count 5 seconds
    const [timer, setTimer] = useState(null);
    const [width, height] = useWindowSize(); // detect screen size


    // calculate Gallery width minus left/right padding
    const galleryWidth = useMemo(() => {
        const { size } = deviceConstants; // get device size constants

        if(width < size.tablet) return width - 32; // for mobile (with 32px padding)
        
        if(width >= size.tablet && width < size.laptop) {
            return width - (width * 0.66); // for tablet (with 66% padding)
        } else if(width >= size.laptop && width < size.desktop) {
            return width - (width * 0.70); // for laptop (with 70% padding)
        } else {
            return width - (width * 0.75); // for laptop (with 75% padding)
        }

    }, [width]);

    // calculate Gallery height (set to half screen size)
    const galleryHeight = useMemo(() => (height / 2), [height]);


    // reset timer and set next active gif for display
    const nextGif = useCallback(() => {
        // reset timer
        clearInterval(timer);
        setCounter(5);
        // set next gif active
        setActive(val => val < (data.length - 1) ? val + 1 : 0);

    }, [data, timer]);


    useEffect(() => {
        if(!data || data.length === 0) return;

        // start/reset timer
        if(!timer) setTimer(setInterval(() => setCounter(cnt => cnt - 1), 1000));
        else if(counter <= 0) nextGif();

    }, [data, timer, counter, nextGif]);


    useEffect(() => {
        // reset when component unmounts
        return () => clearInterval(timer);
    }, [timer]);


    if(!data || data.length === 0) return null;

    return (
        <Container maxwidth={`${galleryWidth}px`} maxheight={`${galleryHeight}px`} onClick={() => onClick(data[active])} >
            <StyledImage src={`https://media4.giphy.com/media/${data[active].id}/giphy.webp`} />
        </Container>
    );
}