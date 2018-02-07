import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import LoginScreen from './src/screens/Login';
import PlaygroundScreen from './src/screens/Playground';
import AboutScreen from './src/screens/About';

const App = StackNavigator({
    Login: {screen: LoginScreen},
    Playground: {screen: PlaygroundScreen},
    About: {screen: AboutScreen}
}, {
    navigationOptions: {
        header: false
    }
});

export default App;
