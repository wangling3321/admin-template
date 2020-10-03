<!--登录页面-->



<template>
  <div class="login-container">
    <div>
      <el-form
        v-loading="loading"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "sign",
  computed: mapState({
    accesslevel: (state) => state.accesslevel,
  }),
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      loading: false,
      ruleForm: {
        pass: "",
        name: "",
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 6, message: "长度大于6位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post("/sign", {
              username: this.ruleForm.name,
              password: this.ruleForm.pass,
            })
            .then((response) => {
              let type;
              if (response.data.status === 0) {
                type = "success";
                this.$message({
                  message: response.data.res,
                  offset: 200,
                  duration: 2000,
                  type,
                });
                this.loading = false;
                this.changeaccesslevel(response.data.accesslevel);
                this.$router.replace("/index");
              } else {
                type = "error";
                this.$message({
                  message: response.data.res,
                  offset: 200,
                  duration: 2000,
                  type,
                });
                this.loading = false;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.loading = false;
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapMutations(["changeaccesslevel"]),
  },
};
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-right: 50px;
}
</style>