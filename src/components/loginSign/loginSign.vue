<!--登录注册切换页面-->



<template>
  <div class="background">
    <div class="loginSign-container">
      <div class="control-btn">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="登录" name="first">
            <sign></sign>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <login></login>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import login from "./login.vue";
import sign from "./sign.vue";
export default {
  name: "loginSign",
  data() {
    return { activeName: "first" };
  },
  components: {
    login,
    sign,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.background {
  background-color: #303133;
  width: 100vw;
  height: 100vh;
  .loginSign-container {
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    width: 50%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>