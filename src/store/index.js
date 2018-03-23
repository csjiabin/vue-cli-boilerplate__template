import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {}
const debug = process.env.NODE_ENV !== 'production'

let plugins = [createPersistedState()]
if (debug) plugins.push(createLogger())

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins,
  modules: {

  }
})
