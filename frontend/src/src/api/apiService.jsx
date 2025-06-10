import axios from 'axios';

// const API_URL = 'http://localhost:3001/api/';
const API_URL = 'http://46.173.19.21:3001/api/';


const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const AppService = {
    async createApplication (appData) {
        try {
            const response = await apiClient.post('/applications/createApplication', appData);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 500 && 
                error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error('Ошибка отправки заявки');
            }
        }
    },

    async getApplications() {
        try {
            const response = await apiClient.get('/applications/getApplications');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const apiError = error;
                throw new Error(apiError.response?.data?.message || 'Ошибка получении заявок');
            }
            throw new Error('Ошибка получении заявок');
        }
    },

    async getApplicationById(id) {
        try {
        const response = await apiClient.get(`/applications/getApplicationById/${id}`);
        return response.data;
        } catch (error) {
        if (axios.isAxiosError(error)) {
            const apiError = error;
            throw new Error(apiError.response?.data?.message || 'Ошибка получения заявки');
        }
        throw new Error('Ошибка получения заявки');
        }
    },
}

export default AppService;