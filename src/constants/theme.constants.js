/* COLOR CONSTANTS */

export const colorConstants = {
    black: '#15191E',
    darkGrey: '#404040',
    softGrey: '#C2C2C2',
    verySoftGrey: '#F1F1F1',
    primary: '#F16335', // Orange Primary
    secondary: '#FF5E30', // Orange Dark
    softWhite: '#F6F6F6',
    white: '#FEFEFE',
};



/* DEVICE CONSTANTS */

const size = {
    mobile: '599',
    tablet: '991',
    laptop: '1440',
    desktop: '1600',
};

export const deviceConstants = {
    size: size,
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
};