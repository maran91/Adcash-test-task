<template>
  <div class="container">
    <action-header title="Add post">
      <router-link
        :to="{ name: 'categoryPosts', params: { id: this.$route.params.id } }"
        class="btn btn-secondary"
      >
        Back
      </router-link>
    </action-header>
    <post-form
      :initial-post="post"
      @submit="createPost"
      :errors="validationErrors"
    />
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import ActionHeader from "../components/ActionHeader.vue";

export default {
  components: {
    PostForm,
    ActionHeader,
  },
  data() {
    return {
      error: null,
      post: {
        content: "",
        category_id: this.$route.params.id,
      },
    };
  },
  computed: {
    validationErrors() {
      return this.error?.errors ?? {};
    },
  },
  methods: {
    async createPost(post) {
      try {
        await this.$api.posts.create(post);
        this.$router.push({
          name: "categoryPosts",
          params: { id: this.$route.params.id },
        });
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>