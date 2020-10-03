<template>
  <el-container class="index-container">
    <el-header class="index-header">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="8">
          <i class="el-icon-s-fold" @click="asideToggle"></i>
        </el-col>
        <el-col :span="8">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <el-dropdown trigger="click" placement="top">
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">Home</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus" @click.native="loginOut()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>

    <el-container class="index-warp">
      <el-aside width="200px" v-show="asideShow">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/index/waitLoginTable" tag="span">
                    <el-menu-item index="1-1">用户注册管理</el-menu-item>
                  </router-link>
                  <router-link to="/index/accessLevel" tag="span">
                    <el-menu-item index="1-2">用户权限管理</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-edit"></i>
                <span slot="title">内容管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="index-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "index",
  computed: mapState({
    accesslevel: (state) => state.accesslevel,
  }),
  data() {
    return {
      asideShow: false,
    };
  },
  methods: {
    ...mapMutations(["changeaccesslevel"]),
    asideToggle() {
      this.asideShow = !this.asideShow;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      this.changeaccesslevel(10);
      this.$router.replace("/loginSign");
    },
  },
};
</script>

<style lang="scss" scope>
.index-container {
  height: 100vh;
  position: relative;
  .index-header {
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 15vh;
  }
  .index-warp {
    height: 85vh;
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 24px;
    }
    .index-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 24px;
      height: 100%;
    }
  }
}
</style>
