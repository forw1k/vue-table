<template>
  <div class="main">
    <VSelect class="main__select" />
    <VTable />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import VTable from '@/components/VTable';
import VSelect from '@/components/VSelect';

export default {
  name: 'v-main',
  components: {
    VTable,
    VSelect,
  },
  computed: {
    ...mapState(['initQuery']),
  },
  methods: {
    ...mapMutations([
      'SET_ORDERS_MIN',
      'SET_ORDERS_MAX',
      'SET_CURRENT_SORT',
      'SET_CURRENT_SORT_DIR',
      'SET_SEARCH_QUERY',
      'SET_SEARCH_QUERY_LOGIN',
      'SET_SEARCH_QUERY_STATUS',
      'SET_CURRENT_SELECT',
    ]),
  },
  mounted() {
    this.$store.commit(
      'SET_ORDERS_MIN',
      this.$route.query.min
        ? Number(this.$route.query.min)
        : this.initQuery.ordersMin
    );
    this.$store.commit(
      'SET_ORDERS_MAX',
      this.$route.query.max
        ? Number(this.$route.query.max)
        : this.initQuery.ordersMax
    );
    this.$store.commit(
      'SET_CURRENT_SORT',
      this.$route.query.sort
        ? this.$route.query.sort
        : this.initQuery.currentSort
    );
    this.$store.commit(
      'SET_CURRENT_SORT_DIR',
      this.$route.query.dir
        ? this.$route.query.dir
        : this.initQuery.currentSortDir
    );
    this.$store.commit(
      'SET_SEARCH_QUERY_LOGIN',
      this.$route.query.queryLogin
        ? this.$route.query.queryLogin
        : this.initQuery.searchQueryLogin
    );
    this.$store.commit(
      'SET_SEARCH_QUERY_STATUS',
      this.$route.query.queryStatus
        ? this.$route.query.queryStatus
        : this.initQuery.searchQueryStatus
    );
    this.$store.commit(
      'SET_CURRENT_SELECT',
      this.$route.query.select
        ? this.$route.query.select
        : this.initQuery.currentSelect
    );
  },
};
</script>

<style lang="scss">
.main__select {
  margin-bottom: 5rem;
}
@media (max-width: 767px) {
  .main__select {
    display: block;
    margin-bottom: 3rem;
  }
}
</style>
