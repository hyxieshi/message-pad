/*
 * @Author: SunBOY
 * @Date: 2022-11-02 12:30:58
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-02 16:26:22
 * @FilePath: \api\index.js
 * @Description:接口
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-02 12:30:58
 */
import Router from "koa-router";
import ly from "../db/model/ly.js";
import Pl from "../db/model/pl.js";
const router = new Router({ prefix: "/api" });
/**
 * @description: 测试接口
 * @return {*}
 * @Author: SunBOY
 */
router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    status: "200",
    title: "这是一个测试接口",
    body: "你好这里是留言板的测试接口",
    date: Date.now(),
  };
});
//获取留言
router.get("/get_Ly", async (ctx) => {
  ctx.status = 200;
  ctx.body = await ly.find();
});
// 获取留言对应的评论
// 参数：ly_id
router.get("/get_Lypl", async (ctx) => {
  console.log(ctx.query.ly_id);
  ctx.status = 200;
  ctx.body = await Pl.find({ ly_id: ctx.query.ly_id });
});
//提交留言
/*
    参数：
    title，username，body，tag，
*/
router.post("/post_Ly", async (ctx) => {
  await ly.create({
    title: ctx.request.body.title,
    username: ctx.request.body.username,
    body: ctx.request.body.body,
    like: ctx.request.body.like,
    tag: ctx.request.body.tag,
  });
  ctx.status = 200;
});
// 给某条留言添加评论
/*
    参数：
    ly_id,username,body
*/
router.post("/post_Lypl", async (ctx) => {
  await Pl.create({
    ly_id: ctx.request.body.ly_id,
    username: ctx.request.body.username,
    body: ctx.request.body.body,
  });
  ctx.body = 200;
});

export default router;
