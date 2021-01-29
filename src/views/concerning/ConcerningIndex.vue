<template>
  <div>
    <el-container class="big-box">
      <!--头部-->
      <el-header>
        <Header @func="getMsgFormSon" @fun="getMsg1FormSon"></Header>
      </el-header>
      <!--中间-->
      <el-main>
        <div class="main-box">
          <!--显示-->
          <div class="content-box hidden-sm-and-down">
            <h1>联系我们</h1>
            <div class="content-bottom">
              <el-col :span="8" class="left-box">
                <div class="input-box">
                  <el-input v-model="name" placeholder="请输入姓名" class="left-input"></el-input>
                  <el-input v-model="email" placeholder="请输入邮箱" class="left-input"></el-input>
                  <el-input v-model="call" placeholder="请输入电话" class="left-input"></el-input>
                  <el-button type="success" @click="onSubmit">提交</el-button>
                </div>
              </el-col>
              <el-col :span="8" class="con-box">
                <baidu-map :center="center" :zoom="zoom" @ready="handler" @click="getClickInfo" :scroll-wheel-zoom='true' class="map-box">
                  <!--                  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>-->
                </baidu-map>
              </el-col>
              <el-col :span="8" class="right-box">
                <div class="icon-box">
                  <i class="el-icon-location-outline"> 上海市杨浦区星汇广场9栋506-1</i>
                <i class="el-icon-time"> 周一至周五上午10点-下午7点</i>
                <i class="el-icon-mobile-phone"> 15221360031</i>
                <i class="iconfont icon-gongzhonghao1"> 公众号: 媒趣BoringMedia</i>
                <i class="iconfont icon-gongzhonghao"> 微信</i>
                </div>

              </el-col>
            </div>
          </div>
          <!--隐藏-->
          <div class="content-show hidden-md-and-up">
            <h1>联系我们</h1>
            <div class="show-bottom">
              <el-row :span="8" class="left-show">
                <div class="input-show">
                  <el-input v-model="name" placeholder="请输入姓名" class="input-show-left"></el-input>
                  <el-input v-model="email" placeholder="请输入邮箱" class="input-show-left"></el-input>
                  <el-input v-model="call" placeholder="请输入电话" class="input-show-left"></el-input>
                  <el-button type="success" @click="onSubmit" class="show-button">提交</el-button>
                </div>
              </el-row>
              <el-row :span="8" class="con-show">
                <baidu-map :center="center" :zoom="zoom" @ready="handler" @click="getClickInfo" :scroll-wheel-zoom='true' class="map-show">
                  <!--                  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>-->
                </baidu-map>
              </el-row>
              <el-row :span="8" class="right-show">
                 <div class="icon-show">
                  <i class="el-icon-location-outline"> 上海市杨浦区星汇广场9栋506-1</i>
                <i class="el-icon-time"> 周一至周五上午10点-下午7点</i>
                <i class="el-icon-mobile-phone"> 15221360031</i>
                <i class="iconfont icon-gongzhonghao1"> 公众号: 媒趣BoringMedia</i>
                <i class="iconfont icon-gongzhonghao"> 微信</i>
                </div>
              </el-row>
            </div>
          </div>
          <!--横杠-->
          <div class="gang-box"></div>
          <!--线-->
          <div class="line-box"></div>
        </div>
        <!--logo-->
        <div class="img-box hidden-sm-and-down">
          <img :src="logo" alt="">
        </div>

      </el-main>
      <el-footer>
        <p class="hidden-sm-and-down p-size">媒趣科技智能有限公司</p>
        <p class="hidden-md-and-up p-show-size">媒趣科技智能有限公司</p>
      </el-footer>
      <!--蒙版-->
      <div class="box-show" :style="{ display: this.boxShadow}"></div>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'

export default {
  name: 'ConcerningIndex',
  components: {
    // HelloWorld
    Header,
  },
  data() {
    // const self = this
    return {
      logo:require('../../assets/img/logo.png'),
      back:require('../../assets/img/contact/lx.png'),
      boxShadow:'none',
      center: {lng: 121.51136, lat: 31.325844},
      zoom: 18,
      name:'',
      email:'',
      call:''
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
    handler ({BMap, map}) {
      var point = new BMap.Point(121.51136, 31.325844)
      map.centerAndZoom(point, 18)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      // var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      // map.addOverlay(circle)
    },
    getClickInfo (e) {
      // console.log(e.point.lng)
      // console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    onSubmit() {
        console.log(this.name);
      }
  }
}
</script>

<style scoped>
/*容器*/
.big-box{
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-header {
  /*background-color: #B3C0D1;*/
  /*color: #333;*/
  text-align: center;
  line-height: 80px!important;
  position: absolute;
  width: 100%;
  height: 80px!important;
  z-index: 99;
  color: white;
  padding: 0!important;
}
.el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
  position: absolute;
  width: 100%;
  z-index: 99;
  bottom: 0;
  padding: 0!important;
  overflow: hidden;
}
.el-main {
  background-color: #005d5c;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0!important;
}
.grid-content{
  /*line-height: 72;*/
}

/*中间部分*/
.main-box{
  /*background: url("../../assets/img/contact/lx.png") no-repeat;*/
  background-size: cover;
  background:#005d5c;
  position: relative;
  height: 100%;
}
/*logo*/
.img-box{
  /*background: #2c3e50;*/
  position: absolute;
  bottom: 10%;
  left: 2%;
  z-index: 99;
}
/*footer*/
.p-size{
  color: white;
}
.p-show-size{
  font-size: 0.8rem;
  line-height: 5.6;
  color: white;
}
/*横杠*/
.gang-box{
  width: 50%;
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  top: 95%;
  bottom: 0;
  margin: 0 auto;
  z-index: 99;
  background: white;
}
/*线*/
.line-box{
  position: absolute;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 99;
  left: 10%;
  opacity: .2;
}
/*中间部分*/
.content-box{
  width: 60%;
  height: 76%;
  /*background: pink;*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
}
.content-box h1{
  /*font-size: 3.8rem;*/
  font-size: 60px;
  color: white;
  height: 20%;
  line-height: 3.6;
  font-weight: 500;
}
.content-bottom{
  height: 80%;
  width: 100%;
  /*background: antiquewhite;*/
}
/*中间三盒子*/
.left-box{
  height: 100%;
  /*background: antiquewhite;*/
}
.con-box{
  height: 100%;
  /*background: aquamarine;*/
}
.right-box{
  height: 100%;
  /*background: burlywood;*/
}
/*左边*/
.left-input{
  width: 82%;
  margin-bottom: 20px;
}
.input-box{
  position: relative;
  top: 20%;
  bottom: 0;
  height: 54%;
  /*background: palegoldenrod;*/
}
.el-button--success {
  background: #005d5c;
  border: 1px solid white;
  border-radius: 10%;
  position: relative;
  left: 9%;
  display: block;
}
/*地图*/
.map-box{
  position: relative;
  top: 20%;
  bottom: 0;
  height: 54%;
}
/*右面*/
.icon-box{
  position: relative;
  top: 20%;
  bottom: 0;
  height: 54%;
  /*background: palegoldenrod;*/
  padding-left: 10%;
}
.icon-box i{
  color: white;
  display: block;
  margin-bottom: 8%;
  text-align: left;
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
/*隐藏*/
.content-show{
  width: 78%;
  height: 84%;
  /*background: pink;*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
}
.content-show h1{
  color: white;
  font-weight: 400;
  height: 5%;
}
/*下面*/
.show-bottom{
  /*background: orange;*/
  width: 100%;
  height: 95%;
}
/*盒子*/
.left-show{
  height: 33.3%;
  /*background: burlywood;*/
}
.con-show{
  height: 33.3%;
  /*background: cyan;*/
}
.right-show{
  height: 33.3%;
  /*background: aquamarine;*/
}
/*左面*/
.left-show{
  width: 80%;
  padding-top: 2%;
}
.input-show-left{
  margin-bottom: 8px;
}
.show-button{
  left: 0;
}
/*地图*/
.map-show{
  position: relative;
  /*top: 20%;*/
  bottom: 0;
  height: 100%;
}
/*图标*/
.icon-show{
  position: relative;
  top: 5%;
  bottom: 0;
  /*height: 54%;*/
  /*background: palegoldenrod;*/
  padding-left: 10%;
}
.icon-show i{
  color: white;
  display: block;
  margin-bottom: 7%;
  text-align: left;
}
</style>
