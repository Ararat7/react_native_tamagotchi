import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet, AsyncStorage,
} from 'react-native';

import ActionsOverlay from '../../components/Actions';
import styles from './styles';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionsVisible: false,
        };
    }

    openActions() {
        this.setState({actionsVisible: true});
    }

    closeActions() {
        this.setState({actionsVisible: false});
    }

    async logout() {
        await AsyncStorage.setItem('user', '');
        this.props.navigation.navigate('Login');
    }

    render () {
        return (
            <View style={styles.container}>
                <ActionsOverlay
                    actionsVisible={this.state.actionsVisible}
                    closeActions={() => this.closeActions()}
                />
                <Text>Main</Text>
                <Button
                    onPress={() => this.openActions()}
                    title="Actions"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('About')}
                    title="About"
                />
                <Button
                    onPress={() => this.logout()}
                    title="Logout"
                />
            </View>
        );
    }
}