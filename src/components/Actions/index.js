import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import {white} from '../../helpers/colors';
import Action from './action';

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
                        <View style={{alignSelf: 'flex-end'}}>
                            <TouchableHighlight
                                style={{padding: 5}}
                                onPress={() => {
                                    this.props.closeActions()
                                }}>
                                <Ionicons name="ios-close-circle-outline" size={40} color={white}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text style={styles.title}>
                                <Text style={styles.blue}>{'<'} </Text>
                                {this.props.username}
                                <Text style={styles.blue}> {'>'}</Text>
                            </Text>
                            <Text style={styles.subtitle}>
                                Software Engineer
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconsWrapper}>
                                <Action
                                    onPress={() => {this.props.onActionPress('home')}}
                                    iconName={'md-home'}
                                    iconSize={50}
                                    iconText={'Home'}
                                />
                                <Action
                                    onPress={() => {this.props.onActionPress('work')}}
                                    state={'active'}
                                    iconName={'md-briefcase'}
                                    iconSize={46}
                                    iconText={'Work'}
                                />
                                <Action
                                    onPress={() => {this.props.onActionPress('asmt')}}
                                    state={'inactive'}
                                    iconName={'md-star'}
                                    iconSize={50}
                                    iconText={'ASMT'}
                                />
                                <Action
                                    onPress={() => {this.props.onActionPress('soft')}}
                                    iconName={'md-chatbubbles'}
                                    iconSize={44}
                                    iconText={'Soft'}
                                />
                                <Action
                                    onPress={() => {this.props.onActionPress('hard')}}
                                    iconName={'md-code-working'}
                                    iconSize={50}
                                    iconText={'Hard'}
                                />
                                <Action
                                    onPress={() => {this.props.onActionPress('docs')}}
                                    iconName={'md-document'}
                                    iconSize={48}
                                    iconText={'Docs'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}