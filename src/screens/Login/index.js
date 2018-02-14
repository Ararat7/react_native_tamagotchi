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

            const user = await AsyncStorage.getItem('user');

            if (user) {
                this.props.navigation.navigate('Main');
            } else {
                this.props.setLoading(false);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    login = async () => {
        try {
            if (this.props.username && this.props.password) {
                await AsyncStorage.setItem('user', this.props.username);
                Keyboard.dismiss();
                this.props.navigation.navigate('Main');
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
                    <ActivityIndicator size="large" color="#a3c644"/>
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
    return {
        username: state.loginScreen.username,
        password: state.loginScreen.password,
        loading: state.loginScreen.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setPassword: (password) => dispatch(setPassword(password)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);