export const namespaced = true

export const state = () => {
  return {
    inProgressMatches: []
  }
}

export const mutations = {
  SET_MATCHES (state, payload) {
    state.inProgressMatches = payload
  }
}

export const actions = {
  FORMAT_MATCHES ({ commit }, payload) {
    commit('SET_MATCHES', payload)
  }
}

export const getters = {}
