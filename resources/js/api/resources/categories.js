import client from "../client";


export default {
    async list() {
        return client.get('/categories')
    },
    async posts(categoryId) {
        return client.get(`/categories/${categoryId}/posts`)
    },
    async create(category) {
        return client.post('/categories', {
            data: category
        });
    },
    async findById(categoryId) {
        return client.get(`/categories/${categoryId}`)
    },
    async update(categoryId, category) {
        return client.put(`/categories/${categoryId}`, {
            data: category
        });
    }
   
}