<template>
  <div>
    <el-container>
      <el-header>
        <Header @func="getMsgFormSon" @fun="getMsg1FormSon"></Header>
      </el-header>
      <el-main>
        <div class="rd-box">
          <div class="rd-top">
            <h1 class="rd-text-top">全球研发</h1>
            <p class="rd-text-con">媒趣在丹麦、美国、德国、新加坡等国家设立了九大全球技术创新中心。<br>目前有逾 1700 名设计专业人才，国际员工占 20%，硕士和博士超过 70%，研发及技术人员达 70% 以上。</p>
          </div>
          <div class="map-box">

          </div>
        </div>

      </el-main>
      <!--      <el-footer>Footer</el-footer>-->
      <!--蒙版-->
      <div class="box-show" :style="{ display: this.boxShadow}"></div>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'


export default {
  name: 'ResearchIndex',
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
  /*background-color: #B3C0D1;*/
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
  background-color: #0d354f;
  color: white;
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
.rd-box{
  width: 76%;
  height: 82%;
  background: pink;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin:auto;
}

/*全球上*/
.rd-top{
  width: 100%;
  height: 20%;
  /*background: wheat;*/

}
.rd-top h1{
  line-height: 2;
  font-size: 2.6rem;
  font-weight: 400;
}
.rd-text-con{
  font-size: 1.4rem;
  line-height: 1.5;
}
/*地图*/
.map-box{
  width: 100%;
  height: 80%;
  background: #2c3e50;
}
</style>
