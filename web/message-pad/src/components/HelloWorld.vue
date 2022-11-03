<!--
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 16:04:20
 * @FilePath: \src\components\HelloWorld.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-11-03 00:24:14
-->
<template>
  <div class="hello">
    <!-- 头部 -->
    <div>
      <div>
        <h2>留言墙</h2>
        <p>很多事都值得记录，当然也值得回味。</p>
      </div>
      <ul>
        <li><router-like>全部</router-like></li>
        <li><router-like>目标</router-like></li>
        <li><router-like>理想</router-like></li>
        <li><router-like>随笔</router-like></li>
        <li><router-like>旅行</router-like></li>
      </ul>
    </div>
    <!-- 内容 -->
    <div>
      <!--变迁 -->
      <div>
        <!-- 标头 -->
        <nav>
          <span>时间</span>
          <span>留言</span>
        </nav>
        <main>
          <p>内容</p>
        </main>
        <footer>
          <div>
            <span>点赞</span>
            <span>评论</span>
          </div>
          <h3>签名</h3>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
