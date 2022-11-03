/*
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 20:53:22
 * @FilePath: \src\main.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-03 00:24:14
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "./axios";

Vue.config.productionTip = false;
// Vue.provide = { axiso: axios };
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
