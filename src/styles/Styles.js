export const addPartStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    submit: {
        flex: 1,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    barcodeIcon:{
        height: 50,
        width: 50
    },
    form:{
        flex: 2.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        borderColor: '#9aa3b8',
        borderWidth: 2.0,
        borderRadius: 5.0,
        backgroundColor: '#fff',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 20,
        padding: 30,
        shadowOffset:{  width: 5,  height: 5 },
        shadowColor: '#9aa3b8',
        shadowOpacity: 0.2
    },
    rowGroup:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f8f8f8',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '600',
        paddingTop: 18,
        paddingBottom: 10
    },
    buttonStyle: {
        backgroundColor: '#02B8F3',
        borderRadius: 15,
        width: 120,
        height: 55
    }

};


export const navBar = {
    heading:{
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: '#74489D',
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null
    },
    headingText:{
        height: 20,
        textAlign: 'center',
        fontSize: 16,
        color: '#f8f8f8',
        fontFamily: 'Arial',
        fontWeight: '500'
    }
};


export const barCodeScannerStyles = {
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    preview: {
        height: 250,
        width: 200
    },
    text:{
        fontFamily:'Verdana',
        fontWeight: '200'
    },
    barcodeIcon:{
        height: 50,
        width: 50
    }
};

export const label = {
    labelText:{
        fontFamily:'Verdana',
        fontWeight: '200'
    }
};

export const textInput = {
    textInputSl:{
            borderColor: '#9aa3b8',
            borderWidth: 1.0,
            borderRadius: 5.0,
            backgroundColor: '#fff',
            height: 40,
            width: 170,
            marginRight: 60,
            marginBottom: 30,
            padding: 2,
            shadowOffset:{  width: 5,  height: 5 },
            shadowColor: '#9aa3b8',
            shadowOpacity: 0.2
    }

};


export const submitButton = {
    text: {
        alignSelf: 'center',
        color: '#f8f8f8',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '600',
        paddingTop: 18,
        paddingBottom: 10
    },

    button: {
        backgroundColor: '#5bc6ff',
        borderRadius: 15,
        width: 120,
        height: 55,
        marginLeft: 20
    }

};
