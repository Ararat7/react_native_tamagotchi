import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    ActivityIndicator,
    Keyboard,
} from 'react-native';
import {Font} from 'expo';

import styles from './styles';
import {green} from '../../helpers/colors';
import {setUsername, setPassword, setLoading,} from '../../actions/loginScreenActions';

class LoginScreen extends Component {
    static navigationOptions = {
        header: false,
    };

    init = async () => {
        try {
            await Font.loadAsync({
                OswaldRegular: require('../../fonts/Oswald-Regular.ttf'),
                OswaldBold: require('../../fonts/Oswald-Bold.ttf'),
                OswaldLight: require('../../fonts/Oswald-Light.ttf'),
            });

            const username = await AsyncStorage.getItem('user');

            if (username) {
                this.props.navigation.navigate('Main', {username});
            } else {
                this.props.setLoading(false);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    login = async () => {
        try {
            const {username, password, navigation} = this.props;
            if (username && password) {
                await AsyncStorage.setItem('user', username);
                Keyboard.dismiss();
                navigation.navigate('Main', {username});
            } else {
                Alert.alert('Login error', 'Please fill in the fields.');
            }
        } catch (error) {
            Alert.alert('Login error', error.message);
        }
    };

    componentDidMount() {
        this.init();
    }

    render() {
        if (this.props.loading) {
            return (
                <KeyboardAvoidingView behavior={'padding'} style={styles.wrapper}>
                    <ActivityIndicator size="large" color={green}/>
                </KeyboardAvoidingView>
            );
        }

        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.wrapper}>
                <View style={styles.logoContainer}>
                    <Text style={[styles.header, {fontFamily: 'OswaldRegular'}]}>
                        <Text style={styles.blue}>{'<'} </Text>
                        epamer
                        <Text style={styles.blue}> {'>'}</Text>
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        onChangeText={username => this.props.setUsername(username)}
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={password => this.props.setPassword(password)}
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        returnKeyType='go'
                        ref={input => this.passwordInput = input}
                        onSubmitEditing={this.login}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.login}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.loginScreen};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setPassword: (password) => dispatch(setPassword(password)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);