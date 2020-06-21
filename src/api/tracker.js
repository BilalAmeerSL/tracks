import axios from 'axios';
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'http://cd12a0bf0578.ngrok.io'
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