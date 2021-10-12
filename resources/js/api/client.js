import axios from "axios"

export default {
    async sendRequest(method, url, params = {}) {
        try {
            const response = await axios.request({
                url: '/api' + url,
                method,
                ...params,
            })

            return response.data
        } catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data);
            }

            return Promise.reject({ message: 'Unknown error' });
        }
    },
    async get(url, params = {}){
        return this.sendRequest('get', url, params);
    },
    async post(url, params = {}){
        return this.sendRequest('post', url, params);
    },
    async put(url, params = {}){
        return this.sendRequest('put', url, params);
    },
    async delete(url, params = {}){
        return this.sendRequest('delete', url, params);
    }
}