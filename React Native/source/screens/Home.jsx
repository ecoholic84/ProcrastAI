import React from 'react';
import { Icon } from '../components';
import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Colors } from 'react-native-ui-lib';

const today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];
const day = today.getDate();
const year = today.getFullYear();

export default function Home() {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerLeft: () => null,
            headerTitle: () => (
                <View>
                    <View row marginTop={16}>
                        <Text textC1 text50>ProcastAI</Text>
                        <Text textC1 text20 marginTop={-25}>.</Text>
                    </View>
                    <Text textC1 text80 style={{ fontWeight: 'bold', marginTop: -6 }}>{`${dayName}, ${monthName} ${day}, ${year}`}</Text>
                </View>
            ),
            headerRight: () => null,
        });
    }, [navigation]);

    const floatingButton = React.useMemo(() => (
        <View absB absR marginB-36 marginR-26>
            <TouchableOpacity>
                <View center br100 bg-textC1 width={56} height={56}>
                    <Icon name='add' size={28} color={Colors.bg1}/>
                </View>
            </TouchableOpacity>
        </View>
    ));

    return (

        <View flex useSafeArea bg-bg1>
            <View flex>

            </View>
            {floatingButton}
        </View>

    );

};