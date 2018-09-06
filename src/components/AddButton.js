import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { submitButton } from '../styles/Styles';

const AddButton = ({ onPress, label }) => {
    const { button, text } = submitButton;
    return (
        <View style={{flex:1, flexDirection: 'row'}}>
        <TouchableOpacity
            style={button}
            onPress={onPress}
        >
            <Text
                style={text}
            >{label}</Text>
        </TouchableOpacity>
        </View>
    );
};


export default AddButton;
