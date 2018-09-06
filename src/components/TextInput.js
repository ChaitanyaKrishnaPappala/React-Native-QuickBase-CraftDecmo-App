import React from 'react';
import {Text, TextInput} from 'react-native';

const TextInput=({style, maxLength, ...props})=>{
    return(
        <Text>Name</Text>
        <TextInput
           style={style}
           maxLength={maxLength}
           placeholderTextColor={props.placeholderTextColor}
    placeholder='enter the part name'
    onChangeText={value => this.setState({ name: value })}
    value={this.state.name}/>
    );
}
