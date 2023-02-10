<template>
  <table class="table">
    <thead>
      <tr class="table__row">
        <th
          v-for="header in headers"
          :key="header.value"
          :class="{
            active: header.value === currentSort,
            rotate: currentSortDir === 'desc',
          }"
          class="table__title"
          @click="sort(header.value), setRouteParams(queryParams)"
        >
          {{ header.name }}
          <img src="@/assets/icons/sort-arrow-top.svg" class="table__icon" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedRows" :key="row.id">
        <td v-for="item in row" :key="item.id" class="table__cell">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { setRouteParams } from '@/utils/setRouteParams';
export default {
  name: 'v-table',
  computed: {
    ...mapState(['headers', 'rows', 'currentSort', 'currentSortDir']),
    ...mapGetters(['sortedRows', 'queryParams']),
  },
  methods: {
    ...mapMutations(['SET_CURRENT_SORT_DIR', 'SET_CURRENT_SORT']),
    sort(value) {
      if (value === this.currentSort) {
        const dir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
        this.$store.commit('SET_CURRENT_SORT_DIR', dir);
      }
      this.$store.commit('SET_CURRENT_SORT', value);
    },
    setRouteParams,
  },
};
</script>

<style lang="scss">
.table {
  width: 100%;
  font-size: 1.6rem;
  border-collapse: collapse;
  border-spacing: 0;
}
.table__row {
  vertical-align: top;
}
.table__title {
  background: var(--light-blue);
  color: var(--white);
  cursor: pointer;
  .table__icon {
    visibility: hidden;
    vertical-align: middle;
  }
}
.table__title.active {
  background: var(--dark-blue);
  .table__icon {
    visibility: visible;
  }
}
.table__title.rotate {
  .table__icon {
    transform: rotate(180deg);
  }
}
.table__cell:hover {
  transition: 0.2s;
  background: var(--smokie);
}
.table,
.table__cell,
.table__title {
  border: 1px solid var(--primary);
}
.table__cell,
.table__title {
  padding: 0.6rem;
  font-weight: 400;
}
</style>
