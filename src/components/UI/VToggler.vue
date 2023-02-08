<template>
  <div class="v-toggler">
    <div
      v-for="option in options"
      :key="option.value"
      :class="{ active: currentSelect === option.value }"
      class="v-toggler__option"
      @click="select(option.value)"
    >
      {{ option.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-toggler',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    currentSelect: {
      type: String,
    },
  },
  methods: {
    select(value) {
      this.$emit('select', value);
    },
  },
};
</script>

<style lang="scss">
.v-toggler__option {
  cursor: pointer;
  padding: 1rem;
  text-align: left;
}
.v-toggler__option:hover {
  background: var(--smokie);
  color: var(--primary);
}
.v-toggler__option.active {
  background: var(--light-blue);
  color: var(--white);
  border: none;
}
</style>
