export const namespaced = true

export const state = () => {
  return {
    inProgressMatches: [],
    pendingMatches: []
  }
}

export const mutations = {
  SET_INPROGRESSMATCHES (state, payload) {
    state.inProgressMatches = payload
  },
  SET_PENDINGMATCHES (state, payload) {
    state.pendingMatches = payload
  }
}

export const actions = {
  FORMAT_INPROGRESSMATCHES ({ commit }, payload) {
    commit('SET_INPROGRESSMATCHES', payload)
  },
  FORMAT_PENDINGMATCHES ({ commit }, payload) {
    commit('SET_PENDINGMATCHES', payload)
  }
}

export const getters = {}
