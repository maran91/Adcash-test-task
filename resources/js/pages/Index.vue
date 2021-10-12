<template>
  <div class="container">
    <action-header title="Categories">
      <router-link :to="`/categories/create`" class="btn btn-primary">
        Add Category
      </router-link>
    </action-header>
    <ul class="group">
      <li
        v-for="category in categories"
        :key="category.id"
        class="
          list-group-item
          d-flex
          flex-row
          align-items-center
          justify-content-between
        "
      >
        <router-link :to="`/categories/${category.id}/posts`">
          {{ category.name }}
        </router-link>
        <div>
          <router-link
            :to="`/categories/${category.id}/update`"
            class="btn btn-secondary"
          >
            Edit
          </router-link>
        </div>
      </li>
    </ul>
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
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      this.categories = await this.$api.categories.list();
    },
  },
};
</script>