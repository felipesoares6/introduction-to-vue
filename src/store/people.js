import API from '../api'
import { TOGGLE_LOADER } from './loader'

const SET_PEOPLE = 'SET_PEOPLE'
const ADD_PERSON = 'ADD_PERSON'

const state = {
  people: []
}

const mutations = {
  [SET_PEOPLE](state, people) {
    state.people = people
  },
  [ADD_PERSON](state, person) {
    state.people = [
      ...state.people,
      person
    ]
  }
}

const actions = {
  getPeople({ commit }) {
    commit(TOGGLE_LOADER)

    API.getPeople()
      .then(data => data.results)
      .then(people =>  commit(SET_PEOPLE, people))
      .finally(() => commit(TOGGLE_LOADER))
  },
  addPerson({ commit }, person) {
    commit(ADD_PERSON, person)
  }
}

const getters = {
  people(state) {
    return state.people
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
