import {StyleSheet} from 'react-native';
import {white, blue, lightGrey, green} from '../../helpers/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: lightGrey,
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    headerTitle: {
        width: '100%',
        textAlign: 'center',
        marginLeft: 26,
        color: white,
        fontSize: 20,
        fontFamily: 'OswaldRegular',
    },
    imageWrapper: {
        alignItems: 'center',
    },
    progressWrapper: {
        paddingVertical: 15,
        alignItems: 'stretch',
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: green,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: white,
        fontSize: 16,
    },
    blue: {
        color: blue,
    },
});

export default styles;