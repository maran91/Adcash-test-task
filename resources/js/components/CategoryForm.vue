<template>
  <form v-on:submit.prevent="$emit('submit', category)" class="add-form">
    <div>
      <label class="form-label">Category name</label>
      <input
        type="text"
        v-model="category.name"
        name="text"
        class="form-control"
        :class="hasError('name') ? 'is-invalid' : ''"
      />
      <div class="invalid-feedback">
        <p
          class="mb-0"
          v-for="(error, index) in getErrors('name')"
          :key="index"
        >
          {{ error }}
        </p>
      </div>
    </div>
    <input type="submit" value="Save" class="btn btn-primary mt-3" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      category: this.initialCategory,
    };
  },
  props: ["initialCategory", "errors"],
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