import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      darkMode: false,
    };
  },

  actions: {
    setDarkMode(context, payload) {
      context.commit('setDarkMode', payload);
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload.isDarkMode;
    },
  },
  getters: {
    isModeDark(state) {
      return state.darkMode;
    },
  },
});

export default store;
