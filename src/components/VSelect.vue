<template>
  <div class="v-select">
    <VToggler
      :currentSelect="currentSelect"
      :options="options"
      class="v-select__toggler"
      @select="selectOption"
    />
    <div v-if="isRange" class="v-select__block">
      <VInput
        :value="queryParams.min"
        :placeholder="'min'"
        :type="'number'"
        class="v-select__input"
        @setQuery="submitMinVal"
      />
      <VInput
        :value="queryParams.max"
        :placeholder="'max'"
        :type="'number'"
        class="v-select__input"
        @setQuery="submitMaxVal"
      />
    </div>
    <div v-else class="v-select__block">
      <VInput
        :value="queryParams.query"
        :placeholder="currentSelect"
        :type="'text'"
        class="v-select__input"
        @setQuery="submitQuery"
      />
    </div>
    <VButton
      :text="'Clear filters'"
      class="v-select__btn"
      @btnClick="clearFilters"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { setRouteParams } from '@/utils/setRouteParams';
import VButton from '@/components/UI/VButton';
import VInput from '@/components/UI/VInput';
import VToggler from '@/components/UI/VToggler';
export default {
  name: 'my-select',
  components: {
    VButton,
    VInput,
    VToggler,
  },
  computed: {
    ...mapState(['options', 'currentSelect']),
    ...mapGetters(['queryParams']),
    isRange() {
      return this.currentSelect === 'orders';
    },
  },
  methods: {
    ...mapMutations([
      'SET_ORDERS_MIN',
      'SET_ORDERS_MAX',
      'SET_SEARCH_QUERY',
      'SET_CURRENT_SELECT',
      'SET_INIT_QUERY',
    ]),
    submitQuery(val) {
      this.$store.commit('SET_SEARCH_QUERY', val.toLowerCase());
      setRouteParams(this.queryParams);
    },
    submitMinVal(val) {
      this.$store.commit('SET_ORDERS_MIN', Math.abs(val));
      setRouteParams(this.queryParams);
    },
    submitMaxVal(val) {
      this.$store.commit('SET_ORDERS_MAX', Math.abs(val));
      setRouteParams(this.queryParams);
    },
    selectOption(option) {
      this.$store.commit('SET_INIT_QUERY');
      this.$router.push({}).catch(() => {});
      this.$store.commit('SET_CURRENT_SELECT', option);
    },
    clearFilters() {
      this.$store.commit('SET_INIT_QUERY');
      this.$router.push({}).catch(() => {});
    },
  },
};
</script>

<style lang="scss">
.v-select {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.6rem;
}
.v-select__toggler {
  margin-right: 5rem;
}
.v-select__input:not(:first-child) {
  margin-left: 1rem;
}
.v-select__btn {
  margin-left: auto;
}
@media (max-width: 767px) {
  .v-select__toggler {
    display: block;
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
  .v-select__block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .v-select__btn {
    display: block;
  }
  .v-select__input {
    width: 49%;
  }
  .v-selectinput:not(:first-child) {
    margin-left: 0;
  }
}
</style>
