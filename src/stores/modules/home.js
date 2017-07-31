/**
 * home配置
 */
import api from "../api";
import * as types from "../mutation-types";

const state = {
  banner: [],
  nowplay: [],
  coming: []
};

const actions = {
  // 获取banner列表
  async getBannerList({ commit }) {
    commit(types.COM_LOADING_STATUS, true);
    try {
      const res = await api.getBannerList()
      commit(types.HOME_GET_BANNER_LIST, res.data);
      commit(types.COM_LOADING_STATUS, false);
    } catch(err) {
      commit(types.COM_LOADING_STATUS, false);
    }
    // api.getBannerList((err, res) => {
    //   if (!err) {
    //     commit(types.HOME_GET_BANNER_LIST, res.data);
    //   }
    //   commit(types.COM_LOADING_STATUS, false);
    // });
  },
  // 获取热映
  getNowPlaying({ commit }) {
    commit(types.COM_LOADING_STATUS, true);
    api.getNowPlaying((err, res) => {
      if (!err) {
        commit(types.HOME_GET_NOWPLAYING_LIST, res.data);
      }
      commit(types.COM_LOADING_STATUS, false);
    });
  },
  // 获取即将上映
  getComingSoon({ commit }) {
    commit(types.COM_LOADING_STATUS, true);
    api.getComingSoon((err, res) => {
      if (!err) {
        commit(types.HOME_GET_COMINGSOON_LIST, res.data);
      }
      commit(types.COM_LOADING_STATUS, false);
    });
  }
};

const getters = {
  getBannerList: state => state.banner,
  getNowPlaying: state => state.nowplay,
  getComingSoon: state => state.coming
};

const mutations = {
  [types.HOME_GET_BANNER_LIST](state, res) {
    state.banner = res.billboards;
  },
  [types.HOME_GET_NOWPLAYING_LIST](state, res) {
    state.nowplay = res.films;
  },
  [types.HOME_GET_COMINGSOON_LIST](state, res) {
    state.coming = res.films;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};