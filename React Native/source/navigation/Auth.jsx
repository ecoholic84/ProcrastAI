import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';

const { width } = Dimensions.get('window');

export default function Auth() {

    return (

        <View flex useSafeArea bg-bg1>
            <View flex center>
                <View row>
                    <Text textC1 text30BO>ProcastAI</Text>
                    <Text textC1 text10BO marginTop={-27}>.</Text>
                </View>
            </View>
            <View center height={100}>
                <TouchableOpacity>
                    <View bg-textC1 br60 center width={width*0.83} height={50}>
                        <Text text60 bg1>Get started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );

}