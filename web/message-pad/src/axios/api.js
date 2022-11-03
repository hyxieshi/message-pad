/*
 * @Author: SunBOY
 * @Date: 2022-11-03 16:36:24
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 21:36:33
 * @FilePath: \src\axios\api.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-03 16:36:24
 */
import req from "./index.js";
export async function getly() {
  return await req.get("/get_Ly");
}
