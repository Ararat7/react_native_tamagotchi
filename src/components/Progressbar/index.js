import React, {Component} from 'react';
import {
    View,
    Text,
    setNativeProps,
} from 'react-native';

import styles from './styles';

export default class Progressbar extends Component {
    setProgress(e) {
        if (e) {
            this.trackWidth = e.nativeEvent.layout.width;
        }

        if (!this.trackWidth) {
            return;
        }

        const barWidth = (this.trackWidth * this.props.value / 100) >> 0;
        this.bar.setNativeProps({width: barWidth});     // direct view manipulation
    }

    componentDidUpdate() {
        this.setProgress();
    }

    render() {
        const {label} = this.props;

        return (
            <View>
                <Text style={styles.darkGrey}>{label}</Text>
                <View style={styles.track} onLayout={(e) => {this.setProgress(e)}}>
                    <View style={styles.bar} ref={(node) => {this.bar = node;}}/>
                </View>
            </View>
        )
    }
}