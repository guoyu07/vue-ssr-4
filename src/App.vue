<template>
  <div id="app">
    <h1 class="title">我是App首页</h1>
    <p>欢迎来到长隆野生动物世界</p>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/topics">Topics</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active {
    color: red;
  }
</style>

