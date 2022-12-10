import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      darkMode: false,
      countries: [],
      selectedCountryFilter: null,
    };
  },

  actions: {
    setDarkMode(context, payload) {
      context.commit('setDarkMode', payload);
    },
    setCountries(context, payload) {
      context.commit('setCountries', payload);
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload.isDarkMode;
    },

    setCountries(state, payload) {
      state.countries = payload.countries;
    },
  },
  getters: {
    isModeDark(state) {
      return state.darkMode;
    },
  },
});

export default store;
