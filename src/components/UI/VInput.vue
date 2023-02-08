<template>
  <input
    :placeholder="placeholder"
    :value="value"
    :type="type"
    class="v-input"
    @input="setQuery"
  />
</template>

<script>
export default {
  name: 'v-input',
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    type: {
      type: String,
    },
  },
  methods: {
    setQuery(event) {
      this.$emit('setQuery', event.target.value);
    },
  },
};
</script>

<style lang="scss">
.v-input {
  width: 10rem;
  padding: 1rem;
  border-bottom: 1px solid var(--primary);
}
</style>
