export const namespaced = true

export const state = () => {
  return {
    rank: []
  }
}

export const mutations = {
  SET_RANKING (state, payload) {
    state.rank = payload
  }
}

export const actions = {
  FORMAT_RANK ({ commit }, payload) {
    commit('SET_RANKING', payload)
  }
}

export const getters = {}
