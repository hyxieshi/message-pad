<!--
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-03 22:45:59
 * @FilePath: \src\views\HomeView.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-11-03 00:24:14
-->
<template>
  <div class="con">
    <!-- 头部 -->
    <div class="nav">
      <div class="nav_heard">
        <h2>留言墙</h2>
        <p>很多事都值得记录，当然也值得回味。</p>
      </div>
      <ul class="nav_tag">
        <li><RouterLink to="/">全部</RouterLink></li>
        <li><RouterLink to="/">目标</RouterLink></li>
        <li><RouterLink to="/">理想</RouterLink></li>
        <li><RouterLink to="/">随笔</RouterLink></li>
        <li><RouterLink to="/">旅行</RouterLink></li>
      </ul>
    </div>
    <!-- 内容 -->
    <div class="main">
      <!--便签 -->
      <div
        class="main_tag"
        v-for="i in list"
        :key="i._id"
        :style="{ 'background-color': back[Math.floor(Math.random() * 10)] }"
      >
        <!-- 标头 -->
        <nav class="main_tag_nav">
          <span>{{ i.date | dateMag() }}</span>
          <span>留言</span>
        </nav>
        <main class="main_tag_main">
          <p>{{ i.body }}</p>
        </main>
        <footer class="main_tag-footer">
          <div>
            <span>{{ i.like }}</span>
            <span>评论</span>
          </div>
          <p>{{ i.username }}</p>
        </footer>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import { getly } from "../axios/api.js";
export default {
  name: "HelloWorld",
  // inject: [axiso],
  props: {
    msg: String,
  },
  data() {
    return {
      list: [],
      // 随机颜色
      back: [
        "rgb(238,215,211)",
        "rgb(228,249,219)",
        "rgb(222,248,252)",
        "rgb(239,228,252)",
        "rgb(238,215,211)",
        "rgb(246,237,213)",
        "rgb(222,248,252)",
        "rgb(239,228,252)",
        "rgb(246,237,213)",
      ],
    };
  },
  mounted() {
    this.getlys();
  },
  methods: {
    async getlys() {
      const res = await getly();
      this.list = res.data;
    },
  },
  filters: {
    // 格式化时间
    dateMag: function (res) {
      // 比如需要这样的格式 yyyy-MM-dd
      let date = new Date(res);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.con {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 250px;
    .nav_heard {
      h2 {
        font-size: 56px;
        margin: 10px 0;
      }
      margin-bottom: 44px;
    }
    .nav_tag {
      list-style: none;
      li {
        display: inline;
        margin: 0 10px;
      }
    }
  }
  .main {
    display: flex;
    width: 85%;
    flex-wrap: wrap;
    .main_tag {
      width: 288px;
      height: 240px;
      display: flex;
      flex-direction: column;
      background-color: antiquewhite;
      padding: 5px 10px;
      margin: 5px;

      .main_tag_nav {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #7e7e7e;
      }
      .main_tag_main {
        flex: 1;
        padding: 15px 0;
      }
      .main_tag-footer {
        display: flex;
        justify-content: space-around;
        div {
          text-align: center;
        }
      }
    }
  }
}
</style>
