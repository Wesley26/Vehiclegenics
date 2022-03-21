import { StyleSheet } from 'react-native';

/**
 * Color config and style
 * export for entire app.
 * 
 * Only create global styles for
 * styling not compatible with
 * tailwind styling.
 */

type GlobalStyles = {
    workSansBold700: { fontFamily: string },
    primaryShadow: {
        textShadowRadius: number,
        textShadowOffset: {
            width: number,
            height: number,
        },
    },
    primary: { color: string },
    bgPrimary: { backgroundColor: string },
    textLight: { color: string },
    bgLight: { backgroundColor: string },
    textMedium: { color: string },
    bgMedium: { backgroundColor: string },
    textDark: { color: string },
    bgDark: { backgroundColor: string },
};

export const globalStyles: GlobalStyles = StyleSheet.create({

    //fontFamily config:
    workSansBold700: {
        fontFamily: 'WorkSans_700Bold',
    },

    //shadow config:
    primaryShadow: {
        textShadowRadius: 1,
        textShadowOffset: { width: -2, height: 2 },
    },

    //Global Color config:
    //////////////////// MAIN COLOR CONFIG ///////////////////
    primary: { 
        color: '#9da1b9',
    },
    bgPrimary: {
        backgroundColor: '#9da1b9',
    },
    /////////////////// TEXT COLOR CONFIG ////////////////////
    textLight: { 
        color: '#9596b9',
    },
    bgLight: {
        backgroundColor: '#9596b9',
    },
    textMedium: { 
        color: '#656776',
    },
    bgMedium: {
        backgroundColor: '#656776',
    },
    textDark: { 
        color: '#43444e',
    },
    bgDark: {
        backgroundColor: '#43444e',
    },

});