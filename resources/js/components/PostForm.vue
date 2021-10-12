<template>
  <form @submit.prevent="$emit('submit', post)" class="add-form">
    <div>
      <label class="form-label">Post content</label>
      <input
        type="text"
        v-model="post.content"
        name="text"
        class="form-control"
        :class="hasError('content') ? 'is-invalid' : ''"
      />
      <div class="invalid-feedback">
        <p
          class="mb-0"
          v-for="(error, index) in getErrors('content')"
          :key="index"
        >
          {{ error }}
        </p>
      </div>
    </div>
    <input type="submit" value="Add Post" class="btn btn-primary mt-3" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: this.initialPost,
    };
  },
  props: ["initialPost", "errors"],
  methods: {
    hasError(name) {
      return this.errors.hasOwnProperty(name);
    },
    getErrors(name) {
      return this.errors?.[name] ?? [];
    },
  },
};
</script>