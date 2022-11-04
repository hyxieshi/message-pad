<!--
 * @Author: SunBOY
 * @Date: 2022-11-03 00:24:14
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-04 22:57:49
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
    <tagVue @details="details"></tagVue>
    <!-- 提交评论  -->
    <div class="post" v-show="id">
      <div class="post_nav">
        <div>这里是头部</div>
        <span @click="id = null">x</span>
      </div>
      <!-- 内容 -->
      <div
        class="main_tag"
        :style="{ 'background-color': back[Math.floor(Math.random() * 10)] }"
      >
        <!-- 标头 -->
        <nav class="main_tag_nav">
          <span>{{ mag.date | dateMag }}</span>
          <span>留言</span>
        </nav>
        <main class="main_tag_main">
          <p>{{ mag.body }}</p>
        </main>
        <footer class="main_tag-footer">
          <div>
            <span>{{ mag.like }}</span>
            <span>评论</span>
          </div>
          <p>{{ mag.username }}</p>
        </footer>
      </div>
      <!-- 提交 -->
      <div class="post_but">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          maxlength="100"
          v-model="body"
        ></textarea>
        <input type="text" name="" id="" v-model="name" />
        <button @click="postComments">评论</button>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <div class="comment_body" v-for="i in comment" :key="i._id">
          <div class="comment_hed"></div>
          <div class="comment_mian">
            <div>
              <span>{{ i.username }}</span>
              <span>{{ i.date | dateMag }}</span>
            </div>
            <p>{{ i.body }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <div></div>
    <!-- 按钮 -->
    <div class="but"><span>+</span></div>
  </div>
</template>

<script>
import tagVue from "@/components/tag.vue";
import { getpl, getOnely, postComment } from "@/axios/api.js";
// import store from "@/store";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      body: "",
      name: "",
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
      id: null,
      mag: {},
      comment: null,
    };
  },
  methods: {
    // 获取评论
    async getComment() {
      const config = {
        ly_id: this.id,
        username: this.name,
        body: this.body,
      };
      let { data } = await getpl(config);
      this.comment = data;
    },
    // 获取id
    details: async function (value) {
      this.id = value;
      console.log(this.id);
    },
    // 提交
    postComments: async function () {
      // await getpl;
      if (this.name !== "" && this.body !== "") {
        let config = {
          id: this.id,
          name: this.name,
          body: this.body,
        };
        await postComment(config);
        this.name = "";
        this.body = "";
        // 没有这个方法啊
        await this.getComment();
      }
    },
  },
  components: {
    tagVue,
  },
  watch: {
    id: async function (n, o) {
      let { data } = await getOnely({ ly_id: this.id });
      this.mag = data;
      // await getComment();
      const config = {
        ly_id: this.id,
        username: this.name,
        body: this.body,
      };
      let res = await getpl(config);
      this.comment = res.data;
    },
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
    width: 350px;
    box-shadow: -2px -5px 10px #7e7e7e;
    background-color: white;
    z-index: 50;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 15px;
    .post_nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      span {
        font-size: 25px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        line-height: 25px;
        text-align: center;
        background-color: #7e7e7e;
        color: white;
      }
    }
    .post_but {
      width: 100%;
      margin: 10px auto;
      input {
        display: block;
        margin: 10px 0;
        width: 150px;
        height: 30px;
      }
      button {
        width: 80px;
        height: 36px;
        background-color: #7e7e7e;
        border-radius: 999em;
        color: white;
        border: 0;
        font-size: 14px;
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
  .comment {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    .comment_body {
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
      .comment_hed {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px;
        background-color: antiquewhite;
        margin-right: 5px;
      }
      .comment_mian {
        margin-left: 5px;
        flex: 1;
        span {
          margin: 5px;
        }
        p {
          margin: 5px;
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
