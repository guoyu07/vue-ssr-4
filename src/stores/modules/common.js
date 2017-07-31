import * as types from "../mutation-types";
import {cloneDeep} from 'lodash'

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
  },
  setTitle({commit}, title) {
    commit(types.COM_SET_TITLE, title)
  }
};

const getters = {
  comConf: state => state,
  loading: state => state.loading,
  title: state => state.title
}

const mutations = {
  [types.COM_CONF](state, settings) {
    // state = {...{}, ...state, ...settings}
    // vue居然没法追踪对象变量
    if (!!settings && typeof settings === 'object') {
      var tmp_state = Object.assign({}, state, settings);
      state = cloneDeep(tmp_state)
      // for (const key of Object.keys(tmp_state)) {
      //   state[key] = tmp_state[key]
      // }
    }
  },
  [types.COM_LOADING_STATUS](state, status) {
    console.log('loading: ', status);
    if (state.loading === 0 && !status) {
      return
    }
    state.loading = status ? ++state.loading : --state.loading

    console.log('loading_num: ', state.loading);
  },
  [types.COM_SET_TITLE](state, title) {
    state.title = title ? title : state.title
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}