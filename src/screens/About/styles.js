import {StyleSheet} from 'react-native';
import {white, blue, grey} from '../../helpers/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20,
    },
    headerTitle: {
        width: '100%',
        textAlign: 'center',
        paddingRight: 56,
        color: white,
        fontSize: 20,
        fontFamily: 'OswaldRegular',
    },
    blue: {
        color: blue,
    },
    aboutText: {
        fontSize: 18,
        color: grey,
    },
    bold: {
        fontWeight: '800',
    },
});

export default styles;