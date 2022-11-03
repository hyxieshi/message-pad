/*
 * @Author: SunBOY
 * @Date: 2022-11-02 13:17:15
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-02 16:27:05
 * @FilePath: \db\model\pl.js
 * @Description:评论模型
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 13:17:15
 */
import { Schema, model } from "mongoose";

const pl = new Schema({
  ly_id: String,
  username: String,
  body: String,
  date: {
    default: Date.now(),
    type: Number,
  },
});

const Pl = model("Pl", pl);

export default Pl;
