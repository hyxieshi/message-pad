<!--
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-04 00:19:38
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
    <!--便签 -->
    <tagVue></tagVue>
    <!-- 提交 -->
    <div class="post">
      <div class="post_nav">
        <div>这里是头部</div>
        <span>x</span>
      </div>
      <!-- 内容 -->
      <div
        class="main_tag"
        :style="{ 'background-color': back[Math.floor(Math.random() * 10)] }"
      >
        <!-- 标头 -->
        <nav class="main_tag_nav">
          <span>{{}}</span>
          <span>留言</span>
        </nav>
        <main class="main_tag_main">
          <p>{{}}</p>
        </main>
        <footer class="main_tag-footer">
          <div>
            <span>{{}}</span>
            <span>评论</span>
          </div>
          <p>{{}}</p>
        </footer>
      </div>
      <!-- 提交 -->
      <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <button></button>
      </div>
      <!-- 评论 -->
      <div></div>
    </div>
    <!-- 详情 -->
    <div></div>
    <!-- 按钮 -->
    <div class="but"><span>+</span></div>
  </div>
</template>

<script>
import tagVue from "@/components/tag.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
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
  components: {
    tagVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.con {
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
  .post {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    box-shadow: -2px -5px 10px #7e7e7e;
    background-color: white;
    z-index: 50;
    .post_nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-size: 25px;
      }
    }
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
  .but {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 50px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    bottom: 5%;
    right: 5%;
  }
}
</style>
