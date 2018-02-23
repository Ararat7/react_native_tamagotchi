import axios from 'axios';

const API_KEY = '3d81b1629e99e0f5db92f55521449a5f';

const SET_POSITION = 'SET_POSITION';
const SET_THEME = 'SET_THEME';
const SET_TEMPERATURE = 'SET_TEMPERATURE';
const SET_WEATHER = 'SET_WEATHER';

export const setPosition = (position) => {
    return {
        type: SET_POSITION,
        position,
    };
};

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        theme,
    };
};

export const fetchWeatherSuccess = (weather) => {
    return {
        type: SET_WEATHER,
        weather,
    };
};

export const fetchWeather = (position) => (dispatch) => {
    if (!position) return;
    // dispatch(fetchWeatherStart());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${API_KEY}`)
        .then(response => {
            const weather = response.data;
            const now = Date.now() / 1000;
            const {sunrise, sunset} = weather.sys;
            const theme = now > sunrise && now < sunset ? 'light' : 'dark';

            dispatch(setTheme(theme));
            dispatch(fetchWeatherSuccess(weather));
        })
        .catch(error => {
            // dispatch(fetchWeatherFail(error));
        });
};