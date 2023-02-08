import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headers: [
      {
        name: 'Место',
        value: 'place',
      },
      { name: 'Логин', value: 'login' },
      { name: 'Подтвержденные заказы', value: 'orders' },
      {
        name: 'Статус',
        value: 'status',
      },
    ],
    rows: [
      {
        place: 1,
        login: 'smith@gmail.com',
        orders: 312,
        status: 'Ценитель красоты',
      },
      {
        place: 2,
        login: 'lenin@gmail.com',
        orders: 120,
        status: 'Поставщик аксессуаров',
      },
      {
        place: 3,
        login: 'mask@gmail.com',
        orders: 98,
        status: 'Конкурент минздрава',
      },
      { place: 4, login: 'dog@mail.ru', orders: 64, status: 'рыбак' },
      { place: 5, login: 'nightmare@mail.ru', orders: 34, status: 'охотник' },
      {
        place: 6,
        login: 'cat@mail.ru',
        orders: 1,
        status: 'Ценитель красоты',
      },
    ],
    options: [
      { name: 'Логин', value: 'login' },
      { name: 'Подтвержденные заказы', value: 'orders' },
      { name: 'Статус', value: 'status' },
    ],
    initQuery: {
      searchQuery: '',
      currentSelect: 'login',
      ordersMin: null,
      ordersMax: null,
      currentSort: '',
      currentSortDir: 'asc',
    },
    searchQuery: '',
    currentSelect: 'login',
    ordersMin: null,
    ordersMax: null,
    currentSort: '',
    currentSortDir: 'asc',
  },
  getters: {
    filteredRows(state) {
      return [...state.rows].filter((item) => {
        if (state.currentSelect === 'orders') {
          if (state.ordersMin && !state.ordersMax) {
            return Number(item.orders) >= Number(state.ordersMin);
          }
          if (!state.ordersMin && state.ordersMax) {
            return Number(item.orders) <= Number(state.ordersMax);
          }
          if (state.ordersMin && state.ordersMax) {
            return (
              Number(item.orders) >= Number(state.ordersMin) &&
              Number(item.orders) <= Number(state.ordersMax)
            );
          }
        } else {
          if (state.searchQuery) {
            return item[state.currentSelect]
              .toLowerCase()
              .includes(state.searchQuery);
          }
        }
        return state.rows;
      });
    },
    sortedRows(state, getters) {
      return getters.filteredRows.sort((a, b) => {
        if (state.currentSort === 'login' || state.currentSort === 'status') {
          if (state.currentSortDir === 'asc') {
            return a[state.currentSort]?.localeCompare(b[state.currentSort]);
          } else {
            return b[state.currentSort]?.localeCompare(a[state.currentSort]);
          }
        } else {
          if (state.currentSortDir === 'asc') {
            return a[state.currentSort] - b[state.currentSort];
          } else {
            return b[state.currentSort] - a[state.currentSort];
          }
        }
      });
    },
    queryParams(state) {
      return {
        min: state.ordersMin,
        max: state.ordersMax,
        query: state.searchQuery,
        dir: state.currentSortDir,
        sort: state.currentSort,
        select: state.currentSelect,
      };
    },
  },
  mutations: {
    SET_CURRENT_SELECT(state, payload) {
      state.currentSelect = payload;
    },
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload;
    },
    SET_ORDERS_MIN(state, payload) {
      state.ordersMin = payload;
    },
    SET_ORDERS_MAX(state, payload) {
      state.ordersMax = payload;
    },
    SET_CURRENT_SORT(state, payload) {
      state.currentSort = payload;
    },
    SET_CURRENT_SORT_DIR(state, payload) {
      state.currentSortDir = payload;
    },
    SET_INIT_QUERY(state) {
      state.searchQuery = state.initQuery.searchQuery;
      state.currentSelect = state.initQuery.currentSelect;
      state.ordersMin = state.initQuery.ordersMin;
      state.ordersMax = state.initQuery.ordersMax;
      state.currentSort = state.initQuery.currentSort;
      state.currentSortDir = state.initQuery.currentSortDir;
    },
  },
  actions: {},
  modules: {},
});
