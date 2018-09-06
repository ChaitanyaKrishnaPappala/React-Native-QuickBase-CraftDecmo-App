import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { StackNavigator } from 'react-navigation';
import AddPart from './src/screens/AddPart';
import BarCodeScanner from './src/screens/BarCodeScanner';
import WebUI from './src/screens/WebUI';

const App = StackNavigator({
    AddPart: { screen: AddPart },
    BarCodeScanner: { screen: BarCodeScanner }
});


const Web = StackNavigator({
    WebUI: { screen: WebUI},
    BarCodeScanner: { screen: BarCodeScanner }
})

AppRegistry.registerComponent(appName, () => App);

//AppRegistry.registerComponent(appName, () => Web);
