import React from 'react';
import Main from './Main';
import Auth from './Auth';
import { useData } from '../hooks';
import { toastConfig } from './ToastConfig';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

const linking = {
    prefixes: ['https://procastai.com', 'procastai://'],
    config: {
        screens: {
            CreateTribe: {
                path: "tribe/:index/:tribeId",
            },
        }
    }
};

const AppTheme = {
    dark: true,
    colors: {
        background: '#FFFFFF',
        border: '#F4F4F4',
        card: '#FFFFFF',
        primary: '#027DFD',
        text: '#000000',
        notification: '#FFFFFF'
    }
};

const ToastConfig = {
    type: 'default',
    position: 'bottom',
    autoHide: true,
    topOffset: 0,
    bottomOffset: 100,
    visibilityTime: 3500,
    config: toastConfig,
};

export default function App() {

    const { user } = useData();

    const toastview = React.useMemo(() => <Toast {...ToastConfig}/>);

    if(user===null) return null;

    return (

       <React.Fragment>
            <NavigationContainer theme={AppTheme} linking={linking}>
                { user ? <Main/> : <Auth/> }
            </NavigationContainer>
            {toastview}
       </React.Fragment>

    );

};