import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Camera from "react-native-camera/types/index";

export default class BarcodeScanner extends Component{
    constructor(props){
        super(props);
        this.state = {barcode : this.props.barcode}
        this.onBarCodeRead = this.onBarCodeRead.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            barcode: nextProps.barcode
        })

    }

    onBarCodeRead = (e) => this.setState({ barcode: e.data });

    render(){
        return(
            <View style={styles.container}>
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={{
                        backgroundColor: 'white'
                    }}>{this.state.qrcode}</Text>
                </Camera>
            </View>
        );
    }
}

var styles = {
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    preview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
};
