<template>
  <div class="d-flex flex-row align-items-center justify-content-between">
    <h1>{{ title }}</h1>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>