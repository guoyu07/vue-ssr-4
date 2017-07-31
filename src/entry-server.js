import 'babel-polyfill'

import { createApp } from './app.js'

export default context => {
  return new Promise((resolve, reject) => {

    const { app, router} = createApp()
    const {url} = context
    console.log('303030')
    console.log('url: ', url);
    const fullPath = router.resolve(url).route.fullPath

    console.log('fullPath: ', fullPath);
    if (fullPath !== url) {
      // reject({ url: fullPath })
    }
    // 设置路由地址
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({code: 404})
      }
      // 对所有匹配的路由组件调用 `asyncData()`
      Promise.all(matchedComponents.map(Component=> {
        console.log('2222', Component.asyncData);
        if (Component.asyncData) {
          console.log('来过');
          // return Component.asyncData({
          //   store,
          //   route: router.currentRoute
          // })
        }
      })).then(() => {
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需要的状态。
        // 当我们将状态附加到上下文， 并且 `template` 选项用于 render 时,
        // 状态将自动序列化为 `window.__INITIAL_STATE__` , 并注入 HTML。
        // context.state = store.state
        // console.log('server-state', context.state.home)
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}