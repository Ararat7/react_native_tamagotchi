import {StyleSheet} from 'react-native';
import {white, blue, lightGrey} from '../../helpers/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lightGrey,
    },
    headerTitle: {
        width: '100%',
        textAlign: 'center',
        marginLeft: 26,
        color: white,
        fontSize: 20,
        fontFamily: 'OswaldRegular',
    },
    blue: {
        color: blue,
    },
});

export default styles;