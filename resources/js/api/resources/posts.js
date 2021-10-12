import client from "../client";


export default {
    async create(post) {
        return client.post('/posts', {
            data: post
        })
    },
    async delete(postId) {
        return client.delete(`/posts/${postId}`)
    }
}