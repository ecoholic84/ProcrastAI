import React from 'react';
import { createTask } from './helper';
import { Icon, Input } from '../components';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, ActivityIndicator } from 'react-native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Colors } from 'react-native-ui-lib';

const { width } = Dimensions.get('window');

export default function CreateTask() {

    const navigation = useNavigation();

    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({
        taskTitle: '',
        taskDesc: '',
        taskStartTime: '',
        estimatedCompletionTime: '',
    });

    const handleChange = React.useCallback((value) => {
        setData(state => ({
            ...state,
            ...value,
        }));
    }, [setData]);

    const handleCreation = async(Data) => {
        setLoading(true);
        await createTask(Data);
        setLoading(false);
        navigation.goBack();
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View center width={60} height={40}>
                        <Icon name='close' color={Colors.textC1}/>
                    </View>
                </TouchableOpacity>
            ),
            headerTitle: () => <Text textC1 text50 marginLeft={-16}>New task</Text>,
            headerRight: () => null,
        });
    }, [navigation]);

    return (

        <View flex useSafeArea bg-bg1 centerH>
            <Input 
            value={data.taskTitle}
            onChange={e => handleChange({ taskTitle: e })}
            placeholder='Task title'/>
            <Input 
            marginT-18 
            value={data.taskDesc}
            onChange={e => handleChange({ taskDesc: e })}
            placeholder='Task Description'/>
            <Input 
            marginT-18 
            value={data.taskStartTime}
            onChange={e => handleChange({ taskStartTime: e })}
            placeholder='Task start time'/>
            <Input 
            marginT-18 
            value={data.estimatedCompletionTime}
            onChange={e => handleChange({ estimatedCompletionTime: e })}
            placeholder='Average task completion time'/>
            <TouchableOpacity disabled={loading} marginT-26 onPress={() => handleCreation(data)}>
                <View bg-textC1 br60 center height={56} width={width*0.9}>
                    <Text bg1 text60>Create</Text>
                    {loading?
                    <View absV absH flex right centerV paddingR-18>
                        <ActivityIndicator size='small' color={Colors.bg1}/>
                    </View>:null}
                </View>
            </TouchableOpacity>
        </View>

    );

};