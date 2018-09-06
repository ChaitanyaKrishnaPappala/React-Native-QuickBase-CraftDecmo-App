import React, {Component} from 'react';
import {View, WebView, Alert} from 'react-native';

export default class WebUI extends Component{
    constructor(props){
        super(props);
        this.state = {barcode: 'hello'};
        this.updateBarCode = this.updateBarCode.bind(this);
    }


    updateBarCode = (data) => {
        this.setState({ barcode: data });
        alert(this.state.barcode);
    };

    //$('#_fid_8' ).focus(function() { window.postMessage('true')});
    render(){
        const { navigate } = this.props.navigation;
        let runScript = "document.getElementById('_fid_8').value = ${this.state.barcode}; " +
            "$('#_fid_8' ).focus(function() { window.postMessage('true')});";
        return(
            <View style={{flex: 1}}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    injectedJavaScript={runScript}
                    onMessage={
                        (event)=>{
                            if(event.nativeEvent.data=='true') {
                                navigate("BarCodeScanner", {
                                    barcode: this.state.barcode,
                                    updateBarCode: this.updateBarCode
                                });
                            }
                        }
                    }
                    source={{ uri: "https://cpappala.quickbase.com/db/bnvm7qmwk?a=nwr", method: 'POST' }} style={{ marginTop: 20 }} />
            </View>
        );
    }
}
