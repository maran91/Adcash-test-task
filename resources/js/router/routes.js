const routes = [
    {
        path: '',
        component: () => import('../pages/Index.vue'),
        name: 'index',
    },
    {
        path: '/categories/:id/posts',
        component: () => import('../pages/CategoryPosts.vue'),
        name: 'categoryPosts',
    },
    {
        path: '/categories/:id/posts/create',
        component: () => import('../pages/CreatePost.vue'),
        name: 'createPost',
    },
    {
        path: '/categories/create',
        component: () => import('../pages/CreateCategory.vue'),
        name: 'createCategory',
    },
    {
        path: '/categories/:id/update',
        component: () => import('../pages/UpdateCategory.vue'),
        name: 'updateCategory',
    }
]

export default routes