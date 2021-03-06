 import { useLayoutEffect, useState } from 'react';


 
/**
 * Method to detect screen size changes
 * 
 * Usage:
 * 1. import module useWindowSize
 * 2. get with: const [width, height] = useWindowSize();
 */ 
 export function useWindowSize() {
     const [size, setSize] = useState([0, 0]);
 
     useLayoutEffect(() => {
       function updateSize() {
         setSize([window.innerWidth, window.innerHeight]);
       }
 
       window.addEventListener('resize', updateSize);
 
       updateSize();
 
       return () => window.removeEventListener('resize', updateSize);
     }, []);
     
     return size;
   }