import React from 'react';
import { createAccount } from './helper';
import { ActivityIndicator, Dimensions } from 'react-native';
import { View, Text, TouchableOpacity, Colors } from 'react-native-ui-lib';

const { width } = Dimensions.get('window');

export default function Auth() {

    const [loading, setLoading] = React.useState(false);

    const handleAuth = async () => {
        setLoading(true);
        await createAccount();
        setLoading(false);
    };

    return (

        <View flex useSafeArea bg-bg1>
            <View flex center>
                <View row marginTop={100}>
                    <Text textC1 text30BO>ProcastAI</Text>
                    <Text textC1 text10BO marginTop={-27}>.</Text>
                </View>
            </View>
            <View center height={100}>
                <TouchableOpacity onPress={handleAuth}>
                    <View bg-textC1 br60 center width={width*0.83} height={54}>
                        <Text text60 bg1>Get started</Text>
                        {loading?
                        <View absV absH flex right centerV paddingR-18>
                            <ActivityIndicator size='small' color={Colors.bg1}/>
                        </View>:null}
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );

}