import Vue from 'vue'
import Vuex from 'vuex'

import loader from './loader'
import people from './people'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...loader.state,
    ...people.state,
  },
  mutations: {
    ...loader.mutations,
    ...people.mutations,
  },
  actions: {
    ...loader.actions,
    ...people.actions,
  },
  getters: {
    ...loader.getters,
    ...people.getters,
  }
})
