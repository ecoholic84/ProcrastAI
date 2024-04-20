import React from 'react';
import { View, Text } from 'react-native-ui-lib';

export const toastConfig = ({
    default: ({ text1 }) => (
        <View paddingH-14 paddingV-7 bg-textC1 centerH br60>
            <Text bg1 text70M center>{text1}</Text>
        </View>
    ),
});