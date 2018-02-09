import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    StatusBar,
    StyleSheet,
} from 'react-native';

export default class ActionsOverlay extends Component {
    render() {
        return (
            <Modal
                // transparent={true}
                visible={this.props.actionsVisible}
                animationType={'fade'}
                onRequestClose={this.props.closeActions}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.white}>Actions Overlay</Text>
                        <Button
                            onPress={() => this.props.closeActions()}
                            title="Close"
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .8)',
    },
    innerContainer: {
        alignItems: 'center',
    },
    white: {
        color: '#ffffff',
    },
});