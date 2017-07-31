/**
 * store.js (数据入口文件)
 * 1. 可以分解成多个 modules 文件
 * 2. 在根组件调用, 然后可以让所有子组件共享数据
 * 3. 子 mutations 需要定义数据的 [状态] 和 [mutation]
 */

import Vue from "vue";
import Vuex from "vuex";

/**
 * 导入各个模块的 [初始状态] 和 [mutations]
 */

import com from "./modules/common";
import home from "./modules/home";

const debug = process.env.NODE_ENV !== "production";
Vue.use(Vuex);
Vue.config.debug = debug;

export default new Vuex.Store({
  modules: {
    // 这个名字与 getter 获取 [state] 有关
    com,
    home
  },
  strict: debug
});