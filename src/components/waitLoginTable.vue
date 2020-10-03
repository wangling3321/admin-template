<!--待注册人员页面-->

<template>
  <div class="waitLoginTable-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="accesslevel" label="权限"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="agree(scope.$index)" type="text">同意</el-button>
          <el-button @click="refuse(scope.$index)" type="text">移除</el-button>
        </template> </el-table-column
      >refuse
    </el-table>
  </div>
</template>

<script>
export default {
  name: "waitLoginTable",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getWaitLoginUser() {
      let url = "/login/getUser";
      this.axios
        .get(url)
        .then((response) => {
          //console.log(response);
          response.data.userData.map((v) => {
            this.tableData.push(v);
          });
          //console.log(this.tableData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    agree(index) {
      //同意注册
      console.log(JSON.parse(JSON.stringify(this.tableData[index])));
      console.log(this.tableData[index].username);
      this.axios
        .delete("/login/destroyUser", {
          username: this.tableData[index].username,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      //console.log(index);
    },
    refuse(index) {
      //拒绝注册
      console.log(JSON.parse(JSON.stringify(this.tableData[index])));
      this.tableData.splice(index, 1);
    },
  },
  mounted() {
    this.getWaitLoginUser();
  },
};
</script>

<style>
</style>