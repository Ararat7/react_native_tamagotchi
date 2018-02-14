const initialState = {
    actionsVisible: false,
};

export default MainScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_ACTIONS':
            return {...state, actionsVisible: true,};
        case 'CLOSE_ACTIONS':
            return {...state, actionsVisible: false,};
        default:
            return state;
    }
};