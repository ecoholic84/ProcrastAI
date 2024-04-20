import Constants from 'expo-constants';
import { register } from '@expo/timeago.js';
import { Colors } from 'react-native-ui-lib';

const unsubscribe = [];

const FIREBASE_API_KEY = Constants?.expoConfig?.extra?.FIREBASE_API_KEY;
const AUTH_DOMAIN = Constants?.expoConfig?.extra?.AUTH_DOMAIN;
const PROJECT_ID = Constants?.expoConfig?.extra?.PROJECT_ID;
const STORAGE_BUCKET = Constants?.expoConfig?.extra?.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = Constants?.expoConfig?.extra?.MESSAGING_SENDER_ID;
const APP_ID = Constants?.expoConfig?.extra?.APP_ID;
const MEASUREMENT_ID = Constants?.expoConfig?.extra?.MEASUREMENT_ID;

const theme = {
    light: {
        bg1: '#FFFFFF', 
        bg2: '#F4F4F4', 
        red: '#F65455', //#F65455
        primary: '#027DFD', //'#0188FF'
        green: '#92E621', //'#92E621
        textC1: '#000000', //#FFFFFF
        textC2: '#ABABAB', //#76777E
    },
    dark: {
        bg1: '#FFFFFF', 
        bg2: '#F4F4F4', 
        red: '#F65455', //#F65455
        primary: '#027DFD', //'#0188FF'
        green: '#92E621', //'#92E621
        textC1: '#000000', //#FFFFFF
        textC2: '#ABABAB', //#76777E
    },
};

export const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
};

const LocaleFunc = (number, index, totalSec) => {
    return [
        ['now', 'now'],
        ['%ss', 'in %ss'],
        ['1m', 'in 1m'],
        ['%sm', 'in %sm'],
        ['1h', 'in 1h'],
        ['%sh', 'in %sh'],
        ['1d', 'in 1d'],
        ['%sd', 'in %sd'],
        ['1w', 'in 1w'],
        ['%sw', 'in %sw'],
        ['1mo', 'in 1mo'],
        ['%smo', 'in %smo'],
        ['1yr', 'in 1yr'],
        ['%syr', 'in %syr']
    ][index];
};

export const loadInitials = () => {

    Colors.loadSchemes(theme);
    Colors.setScheme('dark');
    register('my-locale', LocaleFunc);

};

export const pushListeners = (newListener) => {
    unsubscribe.push(newListener);
};

export const clearSubscriptions = () => {
    for(let i = 0; i < unsubscribe.length; i++){
        unsubscribe[i]();
    }
};