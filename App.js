import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import LoginScreen from './src/screens/Login';
import MainScreen from './src/screens/Main';
import AboutScreen from './src/screens/About';

const App = StackNavigator({
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen},
    About: {screen: AboutScreen}
}, {
    navigationOptions: {
        header: false
    }
});

export default App;
