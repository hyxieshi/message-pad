/*
 * @Author: SunBOY
 * @Date: 2022-11-03 16:36:24
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-04 20:13:24
 * @FilePath: \src\axios\api.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-03 16:36:24
 */
import req from "./index.js";

// 获取所有留言
export async function getly() {
  return await req.get("/get_Ly");
}
// 获取单个留言
export async function getOnely(id) {
  return await req.get("/get_onely", {
    params: id,
  });
}
// 获取单个留言的评论
export async function getpl(config) {
  console.log(config);
  return await req.get("/get_Lypl", {
    params: config,
  });
}
// 提交评论
export async function postComment(config) {
  return await req.post("/post_Lypl", {
    ly_id: config.id,
    body: config.body,
    username: config.name,
  });
}
