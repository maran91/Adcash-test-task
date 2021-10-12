<template>
  <div class="container">
    <action-header title="Update category">
      <router-link :to="{ name: 'index' }" class="btn btn-secondary">
        Back
      </router-link>
    </action-header>
    <category-form
      v-if="this.category"
      :initial-category="category"
      @submit="updateCategory"
      :errors="validationErrors"
    />
  </div>
</template>

<script>
import ActionHeader from "../components/ActionHeader.vue";
import CategoryForm from "../components/CategoryForm.vue";

export default {
  components: {
    ActionHeader,
    CategoryForm,
  },
  data() {
    return {
      error: null,
      category: null,
    };
  },
  computed: {
    validationErrors() {
      return this.error?.errors ?? {};
    },
  },
  created() {
    this.findById();
  },
  methods: {
    async findById() {
      this.category = await this.$api.categories.findById(
        this.$route.params.id
      );
    },
    async updateCategory(category) {
      try {
        await this.$api.categories.update(this.$route.params.id, category);
        this.$router.push({ name: "index" });
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>