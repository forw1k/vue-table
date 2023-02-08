<template>
  <button class="btn" @click="btnClick">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    btnClick() {
      this.$emit('btnClick');
    },
  },
};
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-blue);
  color: var(--white);
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  background: var(--smokie);
  color: var(--primary);
}
</style>
