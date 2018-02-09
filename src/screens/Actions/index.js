import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import styles from './styles';

export default class ActionsScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Actions</Text>
            </View>
        );
    }
}