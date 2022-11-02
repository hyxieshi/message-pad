/*
 * @Author: SunBOY
 * @Date: 2022-11-02 12:14:03
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-02 15:48:33
 * @FilePath: \app.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 12:14:03
 */
import Koa from "koa";
import router from "./api/index.js";
import { koaBody } from "koa-body";
import mongoose from "./db/db.js";
const app = new Koa();
app.use(koaBody());
app.use(router.routes());
app.listen(3000, () => {
  console.log("服务已启动");
  console.log("http://localhost:3000/");
});
