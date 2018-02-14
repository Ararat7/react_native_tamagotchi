import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import styles from './styles';

export default class AboutScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'about',
            headerTitle: (
                <Text style={styles.headerTitle}>
                    <Text style={styles.blue}>{'<'} </Text>
                    about
                    <Text style={styles.blue}> {'>'}</Text>
                </Text>
            ),
            headerStyle: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
            },
            headerTitleStyle: {
                color: '#FFFFFF',
                textAlign: 'center',
            },
            headerTintColor: '#FFFFFF',
        };
    };

    render () {
        const username = this.props.navigation.state.params.username || 'unknown';
        return (
            <View style={styles.container}>
                <Text style={styles.aboutText}>
                    Username:
                    <Text style={styles.bold}> {username}</Text>
                </Text>
            </View>
        );
    }
}