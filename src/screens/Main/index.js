import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    StyleSheet,
    AsyncStorage,
    TouchableHighlight,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import ActionsOverlay from '../../components/Actions';
import styles from './styles';

import {openActions, closeActions,} from '../../actions/mainScreenActions';

class MainScreen extends Component {
    // redux was added for handling state from static method
    static navigationOptions = ({navigation}) => {
        const username = navigation.state.params.username || 'unknown';

        return {
            title: 'epamer',
            headerLeft: null,
            headerRight: (
                <TouchableHighlight onPress={() => {navigation.navigate('About', {username})}}>
                    <Ionicons name="ios-contact-outline" size={32} color="#FFFFFF"/>
                </TouchableHighlight>
            ),
            headerTitle: (
                <Text style={styles.headerTitle}>
                    <Text style={styles.blue}>{'<'} </Text>
                    epamer
                    <Text style={styles.blue}> {'>'}</Text>
                </Text>
            ),
            headerStyle: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
                paddingHorizontal: 12,
            },
            headerTitleStyle: {
                color: '#FFFFFF',
                marginLeft: 0,
                textAlign: 'center',
            },
            headerTintColor: '#FFFFFF',
        };
    };

    async logout() {
        await AsyncStorage.setItem('user', '');
        this.props.navigation.navigate('Login');
    }

    render () {
        return (
            <View style={styles.container}>
                <ActionsOverlay
                    actionsVisible={this.props.actionsVisible}
                    closeActions={() => this.props.closeActions()}
                />
                <Text>Main</Text>
                <Button
                    onPress={() => this.props.openActions()}
                    title="Actions"
                />
                <Button
                    onPress={() => this.logout()}
                    title="Logout"
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        actionsVisible: state.mainScreen.actionsVisible,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openActions: () => dispatch(openActions()),
        closeActions: () => dispatch(closeActions()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);