import createDataContext from "./createDataContext";
import TrackerApi from './../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'signup':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { errorMessage: '', token: null }
        case 'clear_errorMessage':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
}
const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_errorMessage' });
}
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');

    } else {
        navigate('Signup');
    }
}
const signIn = dispatch => async ({ email, password }) => {
    try {
        const response = await TrackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};
const signUp = dispatch => async ({ email, password }) => {
    try {
        const response = await TrackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });

        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign up'
        });
    }
};
const signOut = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};
export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);