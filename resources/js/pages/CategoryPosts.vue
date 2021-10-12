<template>
  <div class="container">
    <action-header title="Posts">
      <router-link
        :to="`/categories/${this.$route.params.id}/posts/create`"
        class="btn btn-primary"
      >
        Add Posts
      </router-link>
      <router-link :to="{ name: 'index' }" class="btn btn-secondary">
        Back
      </router-link>
    </action-header>
    <div class="mb-3">
      <div v-for="post in posts" :key="post.id" class="card mb-3">
        <div
          class="
            card-header
            d-flex
            flex-row
            align-items-center
            justify-content-between
          "
        >
          <span>
            {{ post.created_at }}
          </span>
          <button @click="deletePost(post.id)" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionHeader from "../components/ActionHeader.vue";

export default {
  components: {
    ActionHeader,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.posts = await this.$api.categories.posts(this.$route.params.id);
    },
    async deletePost(postId) {
      await this.$api.posts.delete(postId);

      const index = this.posts.findIndex((post) => post.id === postId);
      this.posts.splice(index, 1);
    },
  },
};
</script>