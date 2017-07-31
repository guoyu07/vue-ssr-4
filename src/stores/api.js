/**
 * api配置
 */

import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:9000"
    : "http://127.0.0.1:9000";

const axios_config = {
  baseURL: baseURL,
  // 请求头信息
  headers: {
    // "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  withCredentials: true,
  timeout: 25000,
  // proxy: {
  //   host: "127.0.0.1",
  //   port: 3000
  // }
};

const instance = axios.create(axios_config);

export default {
  // 根据请求的时间戳获取 banner 列表
  async getBannerList(cb) {
    try {
      const banner = await instance
      .get(`/billboard/home?t=${new Date() * 1}`)

      return banner.data
    } catch(err) {
      console.error(err);
    }

    // instance
    //   .get(`/billboard/home?t=${new Date() * 1}`)
    //   .then(res => {
    //     cb && cb(null, res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     cb && cb(err);
    //   });
  },
  // 获取首页热映电影
  getNowPlaying(cb) {
    instance
      .get(`/film/now-playing?_t=${new Date() * 1}&page=1&count=5`)
      .then(res => {
        cb && cb(null, res.data);
      })
      .catch(err => {
        console.error(err);
        cb && cb(err);
      });
  },
  // 获取首页即将上映电影
  getComingSoon(cb) {
    instance
      .get(`/film/coming-soon?_t=${new Date() * 1}&page=1&count=3`)
      .then(res => {
        cb && cb(null, res.data);
      })
      .catch(err => {
        console.error(err);
        cb && cb(err);
      });
  }
};