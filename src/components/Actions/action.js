import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import {white, blue, grey} from '../../helpers/colors';

export default class Action extends Component {
    render() {
        const {onPress, iconName, iconText, iconSize, state} = this.props;
        const color = state === 'active' ? blue : state === 'inactive' ? grey : white;

        return (
            <TouchableHighlight
                style={styles.iconContainer}
                onPress={onPress}
            >
                <View>
                    <View style={[styles.icon, {borderColor: color,}]}>
                        <Ionicons name={iconName} size={iconSize} color={color}/>
                    </View>
                    <View>
                        <Text style={styles.iconText}>{iconText}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}