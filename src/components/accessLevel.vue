<template>
  <div class="accessLevel-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="accesslevel" label="权限"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="agree(scope.$index)" type="text">权限设置</el-button>
          <el-button @click="refuse(scope.$index)" type="text">冻结账号</el-button>
        </template>
      </el-table-column>refuse
    </el-table>
  </div>
</template>

<script>
export default {
  name: "accessLevel",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getWaitLoginUser() {
      let url = "/sign/getUser";
      this.axios
        .get(url)
        .then((response) => {
          response.data.map((v) => {
            this.tableData.push(v);
          });
          //console.log(this.tableData);
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    agree(index) {
      //同意注册
      console.log(JSON.parse(JSON.stringify(this.tableData[index])));
      //console.log(index);
    },
    refuse(index) {
      //拒绝注册
      console.log(JSON.parse(JSON.stringify(this.tableData[index])));
    },
  },
  mounted() {
    this.getWaitLoginUser();
  },
};
</script>

<style>
</style>