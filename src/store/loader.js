export const TOGGLE_LOADER = 'TOGGLE_LOADER'

const state = {
  loader: false
}

const mutations = {
  [TOGGLE_LOADER](state) {
    state.loader = !state.loader
  }
}

const actions = {
  toggleLoader({ commit }) {
    commit(TOGGLE_LOADER)
  }
}

const getters = {
  isLoading(state) {
    return state.loader
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
