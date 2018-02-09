import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import LoginScreen from './src/screens/Login';
import MainScreen from './src/screens/Main';
import AboutScreen from './src/screens/About';

const App = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: false,
            title: 'Login',
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: false,
            title: 'Main',
        },
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            title: 'About',
        },
    }
},  {
    headerMode: 'screen',
});

export default App;
