import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    Image,
    AsyncStorage,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    PanResponder,
    Dimensions,
    Alert,
} from 'react-native';
import {Permissions, ImagePicker} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import ActionsOverlay from '../../components/Actions';
import Progressbar from '../../components/Progressbar';
import styles from './styles';
import {green, raspberry, white, BUTTON_COLORS, BACKGROUND_COLORS} from '../../helpers/colors';
import {
    openActions,
    closeActions,
    logout,
    changeProgress,
    changeImage,
} from '../../actions/mainScreenActions';
import {setPosition, fetchWeather} from "../../actions/commonActions";

const WINDOW_WIDTH = Dimensions.get('window').width;

class MainScreen extends Component {
    // redux was added for handling state from static method
    static navigationOptions = ({navigation}) => {
        const username = navigation.state.params.username || 'unknown';

        return {
            title: 'epamer',
            headerLeft: null,
            headerRight: (
                <TouchableHighlight onPress={() => {
                    navigation.navigate('About', {username})
                }}>
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

    constructor() {
        super(...arguments);

        const position = new Animated.ValueXY();
        const initialPosition = JSON.parse(JSON.stringify(position));   // save initial position

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({x: gesture.dx, y: gesture.dy,});
            },
            onPanResponderRelease: (event, gesture) => {
                Animated.spring(position, {
                    toValue: {x: initialPosition.x, y: initialPosition.y,}
                }).start();
            },
        });

        this.position = position;
        this.panResponder = panResponder;
    }

    async getPosition() {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        this.hasLocationPermission = status === 'granted';

        return new Promise((resolve, reject) => {
            if (!this.hasLocationPermission) {
                reject(new Error('No permission!'));
            }

            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);
            }, (error) => {
                reject(error);
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 1000,
            });
        });
    }

    async componentWillMount() {
        try {
            const imageURI = await AsyncStorage.getItem('imageURI');
            imageURI && this.props.changeImage(imageURI);

            const {status} = await Permissions.askAsync(Permissions.CAMERA);
            this.hasCameraPermission = status === 'granted';

            const position = await this.getPosition();
            if (position) {
                this.props.setPosition(position);
                this.props.fetchWeather(position);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    }

    getImageStyle() {
        return this.position.getLayout();
    }

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

    async pickImage() {
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: .5,
            });

            if (!result.cancelled) {
                await AsyncStorage.setItem('imageURI', result.uri);
                this.props.changeImage(result.uri);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    }

    render() {
        const {
            actionsVisible,
            personal,
            projectActivities,
            softSkills,
            hardSkills,
            closeActions,
            openActions,
            navigation,
            imageURI,
            theme,
        } = this.props;
        const imageSrc = imageURI ? {uri: imageURI} : require('../../images/development.png');
        const bgColor = this.position.x.interpolate({
            inputRange: [-WINDOW_WIDTH, 0, WINDOW_WIDTH],
            outputRange: [raspberry, BACKGROUND_COLORS[theme], green]
        });

        return (
            <Animated.View style={[styles.container, {backgroundColor: BACKGROUND_COLORS[theme]}, {backgroundColor: bgColor}]}>
                <ActionsOverlay
                    onActionPress={(action) => {
                        this.onActionPress(action)
                    }}
                    username={navigation.state.params.username}
                    actionsVisible={actionsVisible}
                    closeActions={() => closeActions()}
                />
                <View>
                    <View style={styles.imageWrapper}>
                        <Animated.View
                            style={this.getImageStyle()}
                            {...this.panResponder.panHandlers}
                        >
                            <Image
                                style={{width: 256, height: 256}}
                                source={imageSrc}
                            />
                        </Animated.View>
                    </View>
                    <View style={styles.progressWrapper}>
                        <Progressbar label={'Personal'} value={personal} theme={theme}/>
                        <Progressbar label={'Project activities'} value={projectActivities} theme={theme}/>
                        <Progressbar label={'Soft skills'} value={softSkills} theme={theme}/>
                        <Progressbar label={'Hard skills'} value={hardSkills} theme={theme}/>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: BUTTON_COLORS[theme]}]}
                            onPress={() => {
                                openActions()
                            }}>
                            <Text style={styles.buttonText}>Actions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: BUTTON_COLORS[theme]}]}
                            onPress={() => {
                                this.pickImage()
                            }}
                        >
                            <Text style={styles.buttonText}>Change image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: BUTTON_COLORS[theme]}]}
                            onPress={() => {
                                this.logout()
                            }}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.mainScreen, ...state.common};
};

const mapDispatchToProps = (dispatch) => {
    return {
        openActions: () => dispatch(openActions()),
        closeActions: () => dispatch(closeActions()),
        logout: () => dispatch(logout()),
        changeProgress: (progress) => dispatch(changeProgress(progress)),
        changeImage: (imageURI) => dispatch(changeImage(imageURI)),
        setPosition: (position) => dispatch(setPosition(position)),
        fetchWeather: (position) => dispatch(fetchWeather(position)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);