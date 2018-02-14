const OPEN_ACTIONS = 'OPEN_ACTIONS';
const CLOSE_ACTIONS = 'CLOSE_ACTIONS';

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