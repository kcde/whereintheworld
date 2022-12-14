import { createStore } from 'vuex';
import _ from 'lodash';

const store = createStore({
  state() {
    return {
      darkMode: false,
      countries: [],
      selectedCountryFilter: null,
      selectedRegion: null,
    };
  },

  actions: {
    setDarkMode(context, payload) {
      context.commit('setDarkMode', payload);
    },
    setCountries(context, payload) {
      context.commit('setCountries', payload);
    },
    setRegion(context, payload) {
      context.commit('setRegion', payload);
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload.isDarkMode;
    },

    setCountries(state, payload) {
      state.countries = payload.countries;
    },

    setRegion(state, payload) {
      state.selectedRegion = payload.region;
    },
  },
  getters: {
    isModeDark(state) {
      return state.darkMode;
    },

    regions(state) {
      return _.sortBy(
        _.uniq(state.countries.map((country) => country.region)),
        (el) => el
      );
    },
  },
});

export default store;
