import axios from 'axios';
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'http://8e714d22d1c7.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.resolve(err);
    }
)

export default instance;