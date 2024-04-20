import React from 'react';
import 'react-native-gesture-handler';
import { DataProvider } from './source/hooks';
import AppNavigation from './source/navigation/App';
import { MenuProvider } from 'react-native-popup-menu';
import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync();

export default function App() {

    return (

        <DataProvider>
            <MenuProvider>
                <AppNavigation/>
            </MenuProvider>
        </DataProvider>

    );

}