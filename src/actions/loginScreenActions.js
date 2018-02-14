const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_LOADING = 'SET_LOADING';

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username,
    };
};

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password,
    };
};

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        loading,
    };
};