import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles';
import {white, black07} from '../../helpers/colors';

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
                backgroundColor: black07,
            },
            headerTitleStyle: {
                color: white,
                textAlign: 'center',
            },
            headerTintColor: white,
        };
    };

    render() {
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