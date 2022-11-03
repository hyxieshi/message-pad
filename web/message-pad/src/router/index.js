/*
 * @Author: SunBOY
 * @Date: 2022-11-03 15:26:42
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 23:34:52
 * @FilePath: \src\router\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-03 15:26:42
 */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
