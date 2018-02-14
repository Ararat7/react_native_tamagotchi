import React, {Component} from 'react';
import {BackHandler} from "react-native";
import {StackNavigator, addNavigationHelpers, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from './screens/Login';
import MainScreen from './screens/Main';
import AboutScreen from './screens/About';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Main: {
        screen: MainScreen,
    },
    About: {
        screen: AboutScreen,
    }
}, {
    initialRouteName: 'Login',
    headerMode: 'screen',
});

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {dispatch, nav} = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
        });

        return (
            <AppNavigator navigation={navigation}/>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);