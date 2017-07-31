import Vue from 'vue'
import App from './App.vue'
import router from './router'

export function createApp() {
  const app = new Vue({
    router,
    render: h => h(App)
  })
  // 暴露 app 给客户端和服务端
  return {app, router}
}