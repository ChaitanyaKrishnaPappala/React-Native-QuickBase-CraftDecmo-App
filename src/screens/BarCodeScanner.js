import React, { Component } from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import { barCodeScannerStyles } from '../styles/Styles';

export default class BarCodeScanner extends Component{
    constructor(props){
        super(props);
        this.state = {barcode : ''};
        this.onBarCodeRead = this.onBarCodeRead.bind(this);
    }

    onBarCodeRead = (e) => {
        this.setState({ barcode: e.data });
        this.props.navigation.goBack();
        this.props.navigation.state.params.updateBarCode(this.state.barcode);
    }

    render(){
        const {container, preview} = barCodeScannerStyles;
        return(
            <View style={container}>
                <Text>Please scan your barcode</Text>
                <Camera
                    style={preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={{
                        backgroundColor: 'white'
                    }}></Text>
                </Camera>
            </View>
        );
    }
}
