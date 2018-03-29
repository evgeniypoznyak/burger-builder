import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e32b3.firebaseio.com/'
});

export default instance;