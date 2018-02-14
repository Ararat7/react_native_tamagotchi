import {StyleSheet} from 'react-native';
import {white, blue, black08} from '../../helpers/colors';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: black08,
    },
    innerContainer: {
        alignItems: 'stretch',
        padding: 20,
    },
    title: {
        fontSize: 36,
        fontFamily: 'OswaldRegular',
        textAlign: 'center',
        color: white,
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 1,
    },
    subtitle: {
        color: blue,
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1,
    },
    iconsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 10,
        padding: 10,
    },
    iconContainer: {
        width: 80,
        height: 115,
        marginVertical: 18,
        marginHorizontal: 10,
        borderRadius: 3,
        padding: 5,
    },
    icon: {
        flex: 1,
        flexBasis: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: 70,
        borderWidth: 2,
        borderRadius: 35,
    },
    iconText: {
        color: white,
        textAlign: 'center',
    },
    white: {
        color: white,
    },
    blue: {
        color: blue,
    },
});

export default styles;