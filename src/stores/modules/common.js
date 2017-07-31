import * as types from "../mutation-types";

/**
 * App 通用配置
 */

const state = {
  title: "",
  loading: 0
};

const actions = {
  comConf({ commit }, settings) {
    commit(types.COM_CONF, settings);
  }
};

const getters = {
  conConf: state => state,
  loading: state => state.loading,
  title: state => state.title
}

const mutations = {
  [types.COM_CONF](state, settings) {
    console.log('settings: ', settings);
    state = {...state, ...settings}
  },
  [types.COM_LOADING_STATUS](state, status) {
    console.log('loading: ', status);
    if (state.loading === 0 && !status) {
      return
    }
    state.loading = status ? ++state.loading : --state.loading

    console.log('loading_num: ', state.loading);
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}