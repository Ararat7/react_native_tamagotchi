const initialState = {
    actionsVisible: false,
    personal: 0,
    projectActivities: 0,
    softSkills: 0,
    hardSkills: 0,
    imageURI: '',
};

export default MainScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_ACTIONS':
            return {...state, actionsVisible: true,};
        case 'CLOSE_ACTIONS':
            return {...state, actionsVisible: false,};
        case 'CHANGE_PROGRESS':
            return {...state, ...action.progress};
        case 'CHANGE_IMAGE':
            return {...state, imageURI: action.imageURI};
        default:
            return state;
    }
};