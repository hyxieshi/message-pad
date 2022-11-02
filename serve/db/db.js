/*
 * @Author: SunBOY
 * @Date: 2022-11-02 13:14:08
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-02 23:56:23
 * @FilePath: \db\db.js
 * @Description:    数据库连接
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 13:14:08
 */
import mongoose from "mongoose";
const urldb = "mongodb://localhost/lyb";
const URL =
  "mongodb+srv://sunboy:xikexieshi@cluster0.tvewdr1.mongodb.net/?retryWrites=true&w=majority";
const _db = null;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("连接成功");
});

export default mongoose;
