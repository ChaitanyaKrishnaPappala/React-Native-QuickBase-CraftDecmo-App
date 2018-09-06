import React, { Component } from 'react';
import { Alert, Button, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';
import XMLParser from 'react-xml-parser';
import { BARCODE_LOGO } from '../../assets';
import AddButton from '../components/AddButton';
import * as Constants from '../Constants';
import { addPartStyles } from '../styles/Styles';
import { navBar } from '../styles/Styles';
import { label } from '../styles/Styles';
import { textInput } from '../styles/Styles';

var ticket;


export default class AddPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            barcode: ''
        };
        this.onAddPartButtonSubmit = this.onAddPartButtonSubmit.bind(this);
        this.onBarCodeRead = this.onBarCodeRead.bind(this);
        this.updateBarCode = this.updateBarCode.bind(this);
    }


    componentWillMount() {
        fetch(Constants.ROOT_URL + Constants.MAIN + '?', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body:
            'a=' +
            Constants.API_AUTHENTICATE +
            '&username=' +
            Constants.USERNAME +
            '&password=' +
            Constants.PASSWORD
        })
            .then(response => response.text())
            .then(responseText => {
                var parser = new XMLParser();
                var doc = parser.parseFromString(responseText);
                ticket = doc.getElementsByTagName(Constants.TICKET_LABEL)[0].value;
            })
            .catch(error => {
                console.log(error);
            });
    }

    onBarCodeRead = (e) => {
        this.setState({ barcode: e.data });
    }

    updateBarCode  = (data) => {
        this.setState({name: ''});
        this.setState({barcode: data});
    };

    onAddPartButtonSubmit() {
        fetch(Constants.ROOT_URL + Constants.PARTS, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/xml',
                'QUICKBASE-ACTION': Constants.ADD_RECORD,
            },
            body:
            '<?xml version="1.0" ?>\n' +
            '<qdbapi>\n' +
            '   <ticket>' +
            ticket +
            '</ticket>\n' +
            '   <apptoken>' +
            Constants.CRAFT_DEMO_APP_TOKEN +
            '</apptoken>\n' +
            '   <field name="name">' +
            this.state.name +
            '</field>\n' +
            '   <field name="barcode">' +
            this.state.barcode +
            '</field>\n' +
            '</qdbapi>'
        })
            .then(response => response.text())
            .then(responseText => {
                Alert.alert('item added to parts table');
                var parser = new XMLParser();
                console.log(responseText);
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        const { navigate } = this.props.navigation;
        const { container, form, rowGroup, submit, barcodeIcon, button } = addPartStyles;
        const { heading, headingText } = navBar;
        const { labelText } = label;
        const { textInputSl } = textInput;
        return (
            <View style={container}>
                <View style={heading}>
                    <Text style={headingText}>Add part</Text>
                </View>
                <View style={form}>
                    <Text style={labelText}>name</Text>
                    <TextInput
                        style={textInputSl}
                        maxLength={20}
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        placeholder='enter the part name'
                        onChangeText={value => this.setState({ name: value })}
                        value={this.state.name}
                    />
                    <Text style={labelText}>barcode</Text>
                    <View style={rowGroup}>
                        <TextInput
                            style={textInputSl}
                            maxLength={20}
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            placeholder='enter the barcode'
                            onChangeText={value => this.setState({ barcode: value })}
                            value={this.state.barcode}
                            onFocus={() => this.setState({barcodeFocus : true})}
                        />
                        <TouchableHighlight
                            onPress={() => navigate("BarCodeScanner", {barcode: this.state.barcode, updateBarCode:this.updateBarCode})}
                            style={button}>
                            <Image style={barcodeIcon} source={ BARCODE_LOGO } />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={submit}>
                    <AddButton onPress={this.onAddPartButtonSubmit}  label={"Add Part"} />
                </View>
                <View style={{flex: 2}}>
                </View>
            </View>
        );
    }
}
