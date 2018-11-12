import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2,
    obj: {
      age: 16
    }
  },
  mutations: {
    add (state, n) {
      state.count += n
    },
    reduce (state, n) {
      state.count -= n
    }
  },
  getters: {
    count: state => {
      state.count += 100
      return state.count
    }
  },
  actions: {
    addAction ({ commit }) {
      setTimeout(() => {
        commit('add', 10)
        console.log(new Date().getTime())
      })
      console.log('我比add提前执行', new Date().getTime())
    },
    reduceAction ({ commit }) {
      commit('reduce', 10)
    }
  }
})
