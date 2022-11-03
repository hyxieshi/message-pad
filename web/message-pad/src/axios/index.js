/*
 * @Author: SunBOY
 * @Date: 2022-11-03 15:48:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 21:22:17
 * @FilePath: \src\axios\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-03 15:48:14
 */
import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

export default req;
