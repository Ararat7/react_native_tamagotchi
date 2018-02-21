const initialState = {
    position: {
        coords: {
            latitude: 'unknown',
            longitude: 'unknown',
        }
    },
};

export default AboutScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return {...state, position: action.position,};
        default:
            return state;
    }
};