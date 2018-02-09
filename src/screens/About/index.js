import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

import styles from './styles';

export default class AboutScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>About</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Main')}
                    title="Go back"
                />
            </View>
        );
    }
}