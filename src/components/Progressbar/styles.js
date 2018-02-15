import {StyleSheet} from 'react-native';
import {white, blue, darkGrey, raspberry} from '../../helpers/colors';

const barHeight = 10;

const styles = StyleSheet.create({
    track: {
        width: '100%',
        height: barHeight,
        borderRadius: 5,
        backgroundColor: darkGrey,
        overflow: 'hidden',
        marginBottom: 10,
    },
    bar: {
        height: barHeight,
        backgroundColor: raspberry,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [{ skewX: '45deg' }],
    },
    white: {
        color: white,
    },
    blue: {
        color: blue,
    },
    raspberry: {
        color: raspberry,
    },
    darkGrey: {
        color: darkGrey,
    },
});

export default styles;