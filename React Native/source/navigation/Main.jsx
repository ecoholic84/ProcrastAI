import React from 'react';
import { Home, CreateTask } from '../screens';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenOptions = {
    headerShadowVisible: false, 
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: { backgroundColor: '#FFFFFF' },
    headerShown: true,
};

export default function Main() {

    return (

        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="CreateTask" component={CreateTask} options={{...TransitionPresets.ModalPresentationIOS}}/>
        </Stack.Navigator>

    );

};