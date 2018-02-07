import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    ActivityIndicator,
} from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            username: '',
            password: ''
        };
    }

    static navigationOptions = {
        title: 'Login'
    };

    init = async () => {
        let user = await AsyncStorage.getItem('user');
        return JSON.parse(user);
    };

    login = async () => {
        try {
            if (this.state.username && this.state.password) {
                await AsyncStorage.setItem('user', JSON.stringify(this.state));
                this.props.navigation.navigate('Playground');
            } else {
                Alert.alert('Login error', 'Please fill the fields.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentWillMount() {
        this.init().then(user => {
            if (user) {
                this.props.navigation.navigate('Playground');
            } else {
                this.setState({loading: false});
            }
        }).catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) {
            return (
                <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                    <ActivityIndicator size="large" color="#a3c644"/>
                </KeyboardAvoidingView>
            );
        }

        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.header}>
                        <Text style={styles.blue}>{'<'}</Text>
                        epamer
                        <Text style={styles.blue}>{'>'}</Text>
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        onChangeText={username => this.setState({username})}
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={password => this.setState({password})}
                        underlineColorAndroid='transparent'
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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingTop: 40,
    },
    header: {
        color: '#464547',
        fontSize: 60,
        marginBottom: 20,
    },
    formContainer: {
        alignSelf: 'stretch',
        paddingBottom: 40,
    },
    textInput: {
        alignSelf: 'stretch',
        fontSize: 18,
        color: '#999999',
        borderColor: '#999999',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#a3c644',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    blue: {
        color: '#39c2d7',
    }
});