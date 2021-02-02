<template>
  <div>
    <el-container>
      <el-header>
        <Header @func="getMsgFormSon" @fun="getMsg1FormSon"></Header>
      </el-header>
      <el-main>
        <div class="box-top">
          <div class="top-left"></div>
          <div class="top-right"></div>
        </div>
        <div class="box-center"></div>
        <div class="box-bottom"></div>
      </el-main>
<!--      <el-footer>Footer</el-footer>-->
      <!--蒙版-->
      <div class="box-show" :style="{ display: this.boxShadow}"></div>
    </el-container>
  </div>
</template>

<script>
// 全链路卡片
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'

export default {
  name: 'CardIndex',
  components: {
    // HelloWorld
    Header
  },
  data() {
    return {
      boxShadow:'none',
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
  },
}
</script>

<style scoped>
.el-header {
  background-color: #0d3e55;
  color: white;
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
  background-color: #0d3e55;
  color: white;
  text-align: center;
  width: 100%;
  /*height: 100vh;*/
  /*height: calc(100vh - 80px - 60px) !important;*/
  position: relative;
  padding:0!important;
  margin-top: 80px;
  overflow: hidden;
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

/*web*/
.box-top{
  width: 70%;
  height: 68vh;
  background: pink;
  margin: 20px auto;
}
.box-center{
  width: 70%;
  height: 68vh;
  background: antiquewhite;
  margin: 20px auto;
}
.box-bottom{
width: 70%;
  height: 68vh;
  background: palegoldenrod;
  margin: 20px auto;
}
/*iphone*/

</style>
