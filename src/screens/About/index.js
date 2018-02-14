import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import styles from './styles';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'About',
    };

    render () {
        return (
            <View style={styles.container}>
                <Text>About</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back"
                />
            </View>
        );
    }
}