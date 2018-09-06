import React, { Component } from 'react';
import { View, WebView, Alert } from 'react-native';
import { ADD_PART_URL } from '../Constants';

var barC;

export default class WebUI extends Component{
    constructor(props){
        super(props);
        this.state = {barcode: ''};
    }


    render(){
        let WebViewRef;
        const { navigate } = this.props.navigation;
        let runScript = "document.getElementById('_fid_8').value =" + "'" + this.state.barcode.toString() + "'" + "; $('#_fid_8' ).focus(function() { window.postMessage('true')});";
        return(
            <View style={{flex: 1}}>
                <WebView
                    ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    injectedJavaScript={runScript}
                    onMessage={(event)=>{
                        if (event.nativeEvent.data == 'true') {
                            this.setState({barcode: event.nativeEvent.data});
                            navigate("BarCodeScanner", {
                                barcode: this.state.barcode,
                                updateBarCode: (data) => {
                                    this.setState({barcode: data});
                                    barC = this.state.barcode;
                                    alert(barC);
                                    this.forceUpdate();
                                }
                            });
                            this.setState({barcode: ''});
                           WebViewRef && WebViewRef.reload();
                        }
                    }}
                    source={{ uri: ADD_PART_URL , method: 'POST' }} style={{ marginTop: 20 }}
                />
            </View>
        );
    }
}
