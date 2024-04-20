import React from 'react';
import { View, Text } from 'react-native-ui-lib';

export const toastConfig = ({
    default: ({ text1 }) => (
        <View paddingH-14 paddingV-7 bg-border centerH br60>
            <Text textC1 text70R center>{text1}</Text>
        </View>
    ),
});