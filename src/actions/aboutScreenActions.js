const SET_POSITION = 'SET_POSITION';

export const setPosition = (position) => {
    return {
        type: SET_POSITION,
        position,
    };
};