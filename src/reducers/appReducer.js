import {combineReducers} from 'redux';

import NavReducer from './navReducer';
import MainScreenReducer from './mainScreenReducer';
import LoginScreenReducer from './loginScreenReducer';
import AboutScreenReducer from './aboutScreenReducer';

export default AppReducer = combineReducers({
    nav: NavReducer,
    loginScreen: LoginScreenReducer,
    mainScreen: MainScreenReducer,
    aboutScreen: AboutScreenReducer,
});