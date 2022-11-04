<!--
 * @Author: SunBOY
 * @Date: 2022-11-03 23:35:08
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-04 20:47:49
 * @FilePath: \src\components\tag.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-11-03 23:35:08
-->
<template>
  <div class="main">
    <div
      class="main_tag"
      v-for="i in list"
      :key="i._id"
      :style="{ 'background-color': back[Math.floor(Math.random() * 10)] }"
      @click="details(i._id)"
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
</template>

<script>
import { getly } from "../axios/api.js";
import store from "@/store/index.js";
export default {
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
    details(id) {
      // store.state.id = id;
      // store.state.showBq = 1;
      this.$emit("details", id);
    },
  },
};
</script>
<style lang="less">
.main {
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  margin: 0 auto;
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
</style>
