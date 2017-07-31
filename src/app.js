import Vue from 'vue'
// import { sync } from 'vuex-router-sync';
import App from './App.vue'
import router from './router'
// import store from './stores/store'

/* const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
} */

export function createApp() {

  // sync(store, router)
  const app = new Vue({
    router,
    // store,
    render: h => h(App)
  })
  // 暴露 app 给客户端和服务端
  return {app, router}
}