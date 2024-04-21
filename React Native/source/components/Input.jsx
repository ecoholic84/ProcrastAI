import React from 'react';
import Icon from './Icon';
import { View, Colors } from 'react-native-ui-lib';
import { Dimensions, ActivityIndicator, Pressable, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

const Input = React.forwardRef((props, ref) => {

    const { multiline = false, value, returnKeyType, onSubmit, maxLength, search = false, readonly, placeholder, onChange, valid = false, notValid = false, loading = false, secure = false, autoFocus, keyboardType, cursorColor = Colors.textC1, w, fade, ...rest } = props;

    const [show, setShow] = React.useState(secure);

    const fadedColor = React.useMemo(() => fade?Colors.bg2+'1F':Colors.bg2);
    const w1 = React.useMemo(() => w?w:width);
    const w2 = React.useMemo(() => w?w:width*0.9);
    const mh = React.useMemo(() => multiline?120:50);

    const handleChange = React.useCallback(() => {
        setShow(state => !state);
    }, [setShow]);

    const searchview = React.useMemo(() => 
        search?
        <View top width={60} height='100%'>
            <View center width={60} height={50}>
                <Icon name='search' type='feather'/>
            </View>
        </View>:null
    );

    const textview = React.useMemo(() => (
        <View flex marginH-16>
            <TextInput 
            ref={ref} 
            value={value} 
            readonly={readonly} 
            autoCapitalize='none' 
            multiline={multiline} 
            autoFocus={autoFocus} 
            maxLength={maxLength} 
            secureTextEntry={show} 
            onChangeText={onChange} 
            cursorColor={cursorColor} 
            placeholder={placeholder} 
            onSubmitEditing={onSubmit} 
            keyboardType={keyboardType} 
            returnKeyType={returnKeyType} 
            placeholderTextColor={Colors.textC2}
            style={{ width: '100%', height: '100%', zIndex: 100, color: Colors.textC2, fontSize: 16 }}/>
        </View>
    ));

    const loadingview = React.useMemo(() => 
        loading?
        <View top width={60} height='100%'>
            <View center width={60} height={50}>
                <ActivityIndicator size='small' color={Colors.textC1}/>
            </View>
        </View>:null
    );

    const validview = React.useMemo(() => 
        valid?
        <View top width={60} height='100%'>
            <View center width={60} height={50}>
                <Icon name='check-circle' type='feather'/>
            </View>
        </View>:null
    );

    const notvalidview = React.useMemo(() => 
        notValid?
        <View top width={60} height='100%'>
            <View center width={60} height={50}>
                <Icon name='x-circle' type='feather'/>
            </View>
        </View>:null
    );

    const secureview = React.useMemo(() => 
        secure?
        <View top width={60} height='100%'>
            <Pressable onPress={handleChange}>
                <View center width={60} height={50}>
                    <Icon name={!show?'visibility':'visibility-off'}/>
                </View>
            </Pressable>
        </View>:null
    );

    return (

        <View center width={w1}>
            <View row centerV br60 width={w2} maxHeight={mh} minHeight={50} backgroundColor={fadedColor} {...rest}>
                {searchview}
                {textview}
                {loadingview}
                {validview}
                {notvalidview}
                {secureview}
            </View>
        </View>

    );

});

export default React.memo(Input);