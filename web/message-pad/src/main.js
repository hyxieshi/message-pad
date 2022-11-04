/*
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-04 20:49:01
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
Vue.filter(
  "dateMag",
  // 格式化时间
  function (res) {
    // 比如需要这样的格式 yyyy-MM-dd
    let date = new Date(res);
    let Y = date.getFullYear() + "-";
    let M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    let D = date.getDate() + " ";
    return Y + M + D;
  }
);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
