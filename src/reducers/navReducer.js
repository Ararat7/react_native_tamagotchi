import {AppNavigator} from '../AppNavigator';

const router = AppNavigator.router;
const loginNavAction = router.getActionForPathAndParams('Login');
const initialNavState = router.getStateForAction(loginNavAction);

export default NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};