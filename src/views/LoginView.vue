<template>

  <div>
    <div style="width: 600px; background: white;margin: 60px auto;padding: 30px">
      <h1>管理员登录</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 4, max: 18, message: '长度在 4 到 18 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = 'http://localhost:8080/login';
          // console.log('url=' + url);
          // console.log('请求参数');
          // console.log(this.ruleForm);
          this.axios.post(url, this.ruleForm).then((response) => {
            if (response.data == 1) {
              // console.log('登录成功');
              this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              });
            } else if (response.data == 2) {
              // console.log('登录失败');
              this.$message({
                message: '登录失败',
                type: 'error'
              })
            } else {
              // console.log('登录失败')
              this.$message({
                message: '登录失败',
                type: 'error'
              })
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
body {
  background: #12487d;
}
h1{
  text-align: center;
  margin: 20px;
}

</style>