const initialState = {
    position: {
        coords: {
            latitude: 'unknown',
            longitude: 'unknown',
        }
    },
    theme: 'light', // dark
    weather: undefined,
};

export default CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return {...state, position: action.position,};
        case 'SET_THEME':
            return {...state, theme: action.theme,};
        case 'SET_WEATHER':
            return {...state, weather: action.weather,};
        default:
            return state;
    }
};