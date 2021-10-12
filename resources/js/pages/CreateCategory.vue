<template>
  <div class="container">
    <action-header title="Add a category">
      <router-link :to="{ name: 'index' }" class="btn btn-secondary">
        Back
      </router-link>
    </action-header>
    <category-form
      :initial-category="category"
      @submit="createCategory"
      :errors="validationErrors"
    />
  </div>
</template>

<script>
import CategoryForm from "../components/CategoryForm.vue";
import ActionHeader from "../components/ActionHeader.vue";

export default {
  components: {
    CategoryForm,
    ActionHeader,
  },
  data() {
    return {
      error: null,
      category: {
        name: "",
      },
    };
  },
  computed: {
    validationErrors() {
      return this.error?.errors ?? {};
    },
  },
  methods: {
    async createCategory(category) {
      try {
        await this.$api.categories.create(category);
        this.$router.push({ name: "index" });
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>