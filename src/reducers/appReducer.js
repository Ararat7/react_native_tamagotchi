import {combineReducers} from 'redux';

import NavReducer from './navReducer';
import MainScreenReducer from './mainScreenReducer';
import LoginScreenReducer from './loginScreenReducer';
import CommonReducer from './commonReducer';

export default AppReducer = combineReducers({
    nav: NavReducer,
    loginScreen: LoginScreenReducer,
    mainScreen: MainScreenReducer,
    common: CommonReducer,
});