import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    AsyncStorage,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import ActionsOverlay from '../../components/Actions';
import Progressbar from '../../components/Progressbar';
import styles from './styles';
import {white} from '../../helpers/colors';

import {
    openActions,
    closeActions,
    logout,
    changeProgress,
} from '../../actions/mainScreenActions';

class MainScreen extends Component {
    // redux was added for handling state from static method
    static navigationOptions = ({navigation}) => {
        const username = navigation.state.params.username || 'unknown';

        return {
            title: 'epamer',
            headerLeft: null,
            headerRight: (
                <TouchableHighlight onPress={() => {navigation.navigate('About', {username})}}>
                    <Ionicons name="ios-contact-outline" size={32} color={white}/>
                </TouchableHighlight>
            ),
            headerTitle: (
                <Text style={styles.headerTitle}>
                    <Text style={styles.blue}>{'<'} </Text>
                    epamer
                    <Text style={styles.blue}> {'>'}</Text>
                </Text>
            ),
            headerStyle: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
                paddingHorizontal: 12,
            },
            headerTitleStyle: {
                color: white,
                marginLeft: 0,
                textAlign: 'center',
            },
            headerTintColor: white,
        };
    };

    async logout() {
        await AsyncStorage.setItem('user', '');
        this.props.navigation.navigate('Login');
        this.props.logout();
    }

    onActionPress(action) {
        let progress;
        switch (action) {
            case 'home':
                progress = {personal: 23};
                break;
            case 'work':
                progress = {projectActivities: 43};
                break;
            case 'soft':
                progress = {softSkills: 50};
                break;
            case 'hard':
                progress = {hardSkills: 80};
                break;
            default:
                break;
        }

        return progress && this.props.changeProgress(progress);
    }

    render () {
        const {
            actionsVisible,
            personal,
            projectActivities,
            softSkills,
            hardSkills,
            closeActions,
            openActions,
            navigation,
        } = this.props;

        return (
            <View style={styles.container}>
                <ActionsOverlay
                    onActionPress={(action) => {this.onActionPress(action)}}
                    username={navigation.state.params.username}
                    actionsVisible={actionsVisible}
                    closeActions={() => closeActions()}
                />
                <View>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={{width: 256, height: 256}}
                            source={require('../../images/development.png')}
                        />
                    </View>
                    <View style={styles.progressWrapper}>
                        <Progressbar label={'Personal'} value={personal}/>
                        <Progressbar label={'Project activities'} value={projectActivities}/>
                        <Progressbar label={'Soft skills'} value={softSkills}/>
                        <Progressbar label={'Hard skills'} value={hardSkills}/>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {openActions()}}>
                            <Text style={styles.buttonText}>Actions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {this.logout()}}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        actionsVisible: state.mainScreen.actionsVisible,
        personal: state.mainScreen.personal,
        projectActivities: state.mainScreen.projectActivities,
        softSkills: state.mainScreen.softSkills,
        hardSkills: state.mainScreen.hardSkills,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openActions: () => dispatch(openActions()),
        closeActions: () => dispatch(closeActions()),
        logout: () => dispatch(logout()),
        changeProgress: (progress) => dispatch(changeProgress(progress)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);