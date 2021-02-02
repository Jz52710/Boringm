<template>
  <div>
    <el-container>
      <el-header>
        <Header @func="getMsgFormSon" @fun="getMsg1FormSon"></Header>
      </el-header>
      <el-main>

        <!--web-->
        <div class="data-box hidden-sm-and-down">
          <div class="login-left">
            <h3>定义全新的工作</h3>
            <h1>企业数字化平台</h1>
          </div>
          <div class="login-right">
            <div class="login-box">
              <div class="login-top">
                <h2>登录</h2>
                <h5>Enterprise digital platform</h5>
              </div>
              <div class="login-con">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="手机/邮箱">
                    <el-input v-model="formLabelAlign.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password" show-password></el-input>
                    <p class="pd-box" @click="forget">忘记密码?</p>
                  </el-form-item>
                </el-form>
                <el-button @click="submit(formLabelAlign)">登录</el-button>
                <p class="zc-box">还没账号？<span @click="register">注册</span></p>
              </div>
            </div>
          </div>
        </div>

        <!--iphone-->
        <div class="data-show-box hidden-md-and-up">
            <div class="login-show-box">
              <div class="login-show-top">
                <h2>登录</h2>
                <h5>Enterprise digital platform</h5>
              </div>
              <div class="login-show-con">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="手机/邮箱">
                    <el-input v-model="formLabelAlign.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password" show-password></el-input>
                    <p class="pd-show-box" @click="forget">忘记密码?</p>
                  </el-form-item>
                </el-form>
                <el-button @click="submit(formLabelAlign)">登录</el-button>
                <p class="zc-show-box">还没账号？<span @click="register">注册</span></p>
              </div>
            </div>
          </div>

      </el-main>
      <!--蒙版-->
      <div class="box-show" :style="{ display: this.boxShadow}"></div>
    </el-container>
  </div>
</template>

<script>
// 云数据平台
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'

export default {
  name: 'PlatformIndex',
  components: {
    // HelloWorld
    Header
  },
  data() {
    return {
      boxShadow:'none',
      labelPosition: 'top',
        formLabelAlign: {
          username: '',
          password: '',
        }
    };
  },
  methods: {
    getMsgFormSon(data){
      this.boxShadow = data
      // console.log(this.boxShadow)
    },
    getMsg1FormSon(data){
      this.boxShadow = data
      // console.log(this.boxShadow)
    },
    //登录
    submit(data){
      console.log(data)
    },
    //注册
    register(){
      console.log("快联系我们啊！！！！")
    },
    //
    forget(){
      console.log("密码都记不住，要你何用！")
    }
  },
}
</script>

<style scoped>
.el-header {
  /*background-color: #B3C0D1;*/
  color: #ffffff;
  text-align: center;
  line-height: 80px!important;
  width: 100%;
  height: 80px!important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 0!important;
}
.el-footer{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  height: 100%;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  width: 100%;
  height: 100vh;
  /*height: calc(100vh - 80px - 60px) !important;*/
  position: relative;
  padding:0!important;
  /*margin-top: 80px;*/
}
/*蒙版*/
.box-show{
  position: absolute;
  background: black;
  opacity: .6;
  width: 100%;
  height: 100%;
  z-index: 9;
}

/*数据平台web*/
.data-box{
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login/loginbg.png") no-repeat ;
  background-size: 100% 100%;
  display: flex;
}
/*左边*/
.login-left{
  width: 66%;
  height: 100%;
  /*background: pink;*/
  margin: 0;
  text-align: right;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.login-left h3{
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
  position: absolute;
  right: 4%;
  top: 14%;
  letter-spacing:4px;
}
.login-left h1{
  color: white;
  font-size: 2.8rem;
  font-weight: 600;
  position: absolute;
  right: 4%;
  top: 18%;
  letter-spacing:4px;
}
/*右边*/
.login-right{
  width: 34%;
  height: 100%;
  /*background: #42b983;*/
  margin: 0;
  position: relative;
}
.login-box{
  width: 76%;
  height: 60%;
  background: #162d83;
  margin: 0;
  position: relative;
  top: 14%;
  left: 2%;
  border-radius: 2%;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 0 10px #1f0548;
  padding: 40px;
  color: white;
}
.login-top{
  width: 100%;
  height: 16%;
  /*background: pink;*/
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  line-height: 2.2;
}
.login-top h2{
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
}
.login-top h5{
  margin: 0;
  color: #2087db;
  line-height: 6.8;
}
.login-con{
  width: 100%;
  height: 84%;
  /*background: #99a9bf;*/
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
}
.login-con /deep/.el-form-item__label{
  color: white;
  padding: 0;
  line-height: 0;
}
.login-con .el-form-item{
  margin: 36px 0;
}
.pd-box{
  color: #2087db;
  cursor: pointer;
  text-align: right;
  line-height: 1.5;
}
.login-con .el-button{
  color: white;
  width: 100%;
  background: #6b23d1;
  border: 1px solid #6b23d1;
}
.zc-box{
  font-size: 14px;
  margin-top: 10px;
}
.zc-box span{
  cursor: pointer;
  color: #2087db;
}

/*iPhone*/
.data-show-box{
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login/sjbg.png") no-repeat;
  background-size: cover;
}
.login-show-box{
  width: 76%;
  height: 60%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin:auto;
  background: #162d83;
  border-radius: 2%;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 0 10px #1f0548;
  padding: 5%;
  color: white;
}
.login-show-top{
  width: 100%;
  height: 16%;
  /*background: pink;*/
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  line-height: 2.2;
}
.login-show-top h2{
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
}
.login-show-top h5{
  margin: 0;
  color: #2087db;
  line-height: 5.2;
}
.login-show-con{
  width: 100%;
  height: 84%;
  /*background: #99a9bf;*/
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
}
.login-show-con /deep/.el-form-item__label{
  color: white;
  padding: 0;
  line-height: 0;
}
.login-show-con .el-form-item{
  margin: 10% 0;
}
.pd-show-box{
  color: #2087db;
  cursor: pointer;
  text-align: right;
  line-height: 1.5;
}
.login-show-con .el-button{
  color: white;
  width: 100%;
  background: #6b23d1;
  border: 1px solid #6b23d1;
}
.zc-show-box{
  font-size: .4rem;
  margin-top: 2%;
}
.zc-show-box span{
  cursor: pointer;
  color: #2087db;
}


</style>
