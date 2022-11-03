/*
 * @Author: SunBOY
 * @Date: 2022-11-02 12:14:03
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 21:21:00
 * @FilePath: \app.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 12:14:03
 */
import Koa from "koa";
import router from "./api/index.js";
import { koaBody } from "koa-body";
import cors from "koa2-cors";
import mongoose from "./db/db.js";
const app = new Koa();
app.use(cors());
app.use(koaBody());
app.use(router.routes());
app.listen(3000, () => {
  console.log("服务已启动");
  console.log("http://localhost:3000/");
});
