/*
 * @Author: SunBOY
 * @Date: 2022-11-02 13:17:09
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 22:20:49
 * @FilePath: \db\model\ly.js
 * @Description: 留言的模型
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 13:17:09
 */
import { Schema, model } from "mongoose";
import { number } from "zod";

const Ly = new Schema({
  title: String,
  username: String,
  body: String,
  date: {
    default: Date.now(),
    type: Number,
  },
  like: {
    type: Number,
    requireda: false,
  },
  tag: Array,
  ip: {
    type: String,
    required: false,
  },
});

const ly = model("Ly", Ly);
export default ly;
