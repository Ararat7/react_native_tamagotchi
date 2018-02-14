import {StyleSheet} from 'react-native';
import {white, blue, green, darkGrey, grey} from '../../helpers/colors';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: white,
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
        color: darkGrey,
        fontSize: 64,
        marginBottom: 20,
    },
    formContainer: {
        alignSelf: 'stretch',
        paddingBottom: 40,
    },
    textInput: {
        alignSelf: 'stretch',
        fontSize: 18,
        color: grey,
        borderColor: grey,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: green,
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
        color: blue,
    }
});

export default styles;