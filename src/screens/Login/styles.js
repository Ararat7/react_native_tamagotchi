import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
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

export default styles;