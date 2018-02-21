import React, {Component} from 'react';
import {
    View,
    Text, Alert,
} from 'react-native';
import {Permissions} from "expo";
import {connect} from "react-redux";

import styles from './styles';
import {white, black07} from '../../helpers/colors';
import {setPosition} from "../../actions/aboutScreenActions";

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

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        this.hasLocationPermission = status === 'granted';

        if (this.hasLocationPermission) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.props.setPosition(position);
            }, (error) => {
                Alert.alert('Error', 'Cannot get current position!');
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 1000,
            });
        }
    }

    render() {
        const {navigation, position} = this.props;
        const username = navigation.state.params.username || 'unknown';

        return (
            <View style={styles.container}>
                <Text style={styles.aboutText}>
                    Username: <Text style={styles.bold}>{username}</Text>
                </Text>
                <Text style={styles.aboutText}>
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
    return {...state.aboutScreen};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosition: (position) => dispatch(setPosition(position)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);