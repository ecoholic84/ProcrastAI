import React from 'react';
import { Icon } from '../components';
import { listenTasks } from './helper';
import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Colors } from 'react-native-ui-lib';
import { Dimensions, FlatList } from 'react-native';

const today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];
const day = today.getDate();
const year = today.getFullYear();

const { width } = Dimensions.get('window');

export default function Home() {

    const navigation = useNavigation();

    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
        listenTasks(setTasks);
    }, []);

    console.log(tasks);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerLeft: () => null,
            headerTitle: () => (
                <View>
                    <View row marginTop={16}>
                        <Text textC1 text50>ProcastAI</Text>
                        <Text textC1 text20 marginTop={-28}>.</Text>
                    </View>
                    <Text textC1 text80 style={{ fontWeight: 'bold', marginTop: -6 }}>{`${dayName}, ${monthName} ${day}, ${year}`}</Text>
                </View>
            ),
            headerRight: () => null,
        });
    }, [navigation]);

    const floatingButton = React.useMemo(() => (
        <View absB absR margin-26>
            <TouchableOpacity onPress={() => navigation.navigate('CreateTask')}>
                <View center br100 bg-textC1 width={56} height={56}>
                    <Icon name='add' size={28} color={Colors.bg1}/>
                </View>
            </TouchableOpacity>
        </View>
    ));

    const renderItem = React.useCallback(({item, index}) => (
        <View center width={width}>
            <View paddingH-12 paddingV-16 width={width*0.95}>
                <Text textC1 text60>{item.taskTitle}</Text>
                <Text textC2 text70R>{item.taskDesc}</Text>
                <View marginT-16 row centerV width={width*0.95}>
                    <TouchableOpacity>
                        <View bg-textC1 br30 center paddingH-16 height={40}>
                            <Text text80 bg1>Done</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity marginL-16>
                        <View bg-bg2 br30 center paddingH-16 height={40}>
                            <Text text80 textC1>Procastinated</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ));

    return (

        <View flex useSafeArea bg-bg1>
            <FlatList
            data={tasks}
            keyExtractor={(i, x) => x}
            renderItem={renderItem}
            ListHeaderComponent={<View height={16}/>}
            showsVerticalScrollIndicator={false}/>
            {floatingButton}
        </View>

    );

};