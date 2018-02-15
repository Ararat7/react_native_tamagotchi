const OPEN_ACTIONS = 'OPEN_ACTIONS';
const CLOSE_ACTIONS = 'CLOSE_ACTIONS';
const LOGOUT = 'LOGOUT';

export const openActions = () => {
    return {
        type: OPEN_ACTIONS,
    };
};

export const closeActions = () => {
    return {
        type: CLOSE_ACTIONS,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};