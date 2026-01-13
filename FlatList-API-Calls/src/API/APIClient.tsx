
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});



apiClient.interceptors.request.use(config => {
    // You can modify the request config here if needed
    return config;
}, error => {
    return Promise.reject(error);
});
apiClient.interceptors.response.use(response => {
    if (response.status === 200) {
        console.log('API Response:', response.data);
    }
    return response;
}, error => {
    return Promise.reject(error);
});

export default apiClient;
