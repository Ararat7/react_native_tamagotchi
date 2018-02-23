import React, {Component} from 'react';
import {
    View,
    Text, Alert,
} from 'react-native';
import {connect} from "react-redux";

import styles from './styles';
import {white, black07, BACKGROUND_COLORS, TEXT_COLORS} from '../../helpers/colors';

class AboutScreen extends Component {
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
        const {navigation, position, theme} = this.props;
        const username = navigation.state.params.username || 'unknown';

        return (
            <View style={[styles.container, {backgroundColor: BACKGROUND_COLORS[theme]}]}>
                <Text style={[styles.aboutText, {color: TEXT_COLORS[theme]}]}>
                    Username: <Text style={styles.bold}>{username}</Text>
                </Text>
                <Text style={[styles.aboutText, {color: TEXT_COLORS[theme]}]}>
                    Theme: <Text style={styles.bold}>{theme}</Text>
                </Text>
                <Text style={[styles.aboutText, {color: TEXT_COLORS[theme]}]}>
                    Position:
                    {'\n'}
                    Lat: <Text style={styles.bold}>{position.coords.latitude}</Text>
                    {'\n'}
                    Long: <Text style={styles.bold}>{position.coords.longitude}</Text>
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.common};
};

export default connect(mapStateToProps)(AboutScreen);