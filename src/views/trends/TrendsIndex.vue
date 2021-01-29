<template>
  <div>
    <el-container>
      <el-header>
        <Header @func="getMsgFormSon" @fun="getMsg1FormSon"></Header>
      </el-header>
      <el-main>
        <!--web-->
        <div class="new-box hidden-sm-and-down">
          <div class="new-line"></div>
          <p class="size-box">最新动态</p>
        </div>
        <div class="list-box hidden-sm-and-down" v-for="(list,key) in list" :key="key" :class="key==1||key==3||key==5?'listbox list-active':'list-box'">
          <div class="list-left">
            <img :src="list.image" alt="">
          </div>
          <div class="list-right">
            <div class="list-dian">
              <div class="dian-y"></div>
            </div>
            <div class="list-text">
              <p class="text-top">{{list.title}}</p>
              <p class="text-con">{{list.title1}}</p>
              <p class="text-bottom">{{list.text}}</p>
            </div>
          </div>
        </div>

        <!--手机版-->
        <div class="iphone-box hidden-md-and-up">
          <div class="iphone-line"></div>
          <p class="iphone-size">最新动态</p>
        </div>
        <div class="hidden-md-and-up iphone-list" v-for="(list,key) in list" :key="'key'+key">
          <div class="iphone-list-top">
            <img :src="list.image" alt="">
          </div>
          <div class="iphone-list-con">
            <div class="iphone-list-dian">
              <div class="iphone-dian-y"></div>
            </div>
            <div class="iphone-list-text">
              <p class="iphone-text-top">{{list.title}}</p>
              <p class="iphone-text-con">{{list.title1}}</p>
              <p class="iphone-text-bottom">{{list.text}}</p>
            </div>
          </div>
        </div>

        <!--底边栏-->
        <el-footer>
          <!--横杠-->
          <div class="gang-box"></div>
          <p class="hidden-sm-and-down p-size">媒趣科技智能有限公司</p>
          <p class="hidden-md-and-up p-show-size">媒趣科技智能有限公司</p>
        </el-footer>
      </el-main>

      <!--蒙版-->
      <div class="box-show" :style="{ display: this.boxShadow}"></div>
      <!--线-->
      <div class="line-box"></div>
      <div class="line-right-box"></div>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'

export default {
  name: 'TrendsIndex',
  components: {
    // HelloWorld
    Header
  },
  data() {
    return {
      boxShadow:'none',
      list:[{
        image:require('@/assets/img/list/l1.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l2.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l3.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l4.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l5.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l6.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      },{
        image:require('@/assets/img/list/l7.png'),
        title:'机械臂装置',
        title1:'智慧农场',
        text:'智慧农场是用机械臂进行检查，浇水，搬运，维护一体化流程，所有的植物由机械臂自动完成，形成全流程自动化。并配有显示屏实时监测其水分，养料状态及其他信息管理与采集。遵循未来农业科学、低耗和环境友好。'
      }]
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
  background-color: #007d7e;
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
  /*background-color: pink;*/
  color: white;
  text-align: center;
  line-height: 60px;
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
}
.el-main {
  background-color: #007d7e;
  color: white;
  text-align: center;
  width: 100%;
  /*height: 100vh;*/
  /*height: calc(100vh - 80px) !important;*/
  position: absolute;
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
  top: 18%;
  bottom: 0;
  margin: 0 auto;
  z-index: 99;
  background: white;
}
/*线*/
.line-box{
  position: fixed;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 99;
  left: 10%;
  opacity: .2;
}
.line-right-box{
  position: fixed;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 99;
  /*right: 18%;*/
  right: 10%;
  opacity: .2;
}
/*顶部*/
.new-box{
  width: 62%;
  height: 170px;
  position: relative;
}
.new-box .new-line{
  width: 10%;
  height: 2px;
  position: absolute;
  left: 0;
  /*right: 0;*/
  top: 60%;
  bottom: 0;
  margin: 0 auto;
  /*z-index: 99;*/
  background: white;
}
.new-box .size-box{
  font-size: 3rem;
  font-weight: 500;
  letter-spacing:4px;
  text-align: left;
  position: absolute;
  bottom: 0;
}
/*列表*/
.list-box{
  margin-top: 30px;
  width: 62%;
  height: 332px;
  background: #003432;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  /*flex-direction: row-reverse;*/
}
.list-active{
  flex-direction: row-reverse;
}
.list-left{
  width: 50%;
  height: 100%;
}
.list-left img{
  width: 100%;
  height: 100%;
}
.list-right{
  width: 50%;
  height: 100%;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
}
.list-dian{
  width: 20%;
  height: 100%;
  position: relative;
}
.dian-y{
  width: 10px;
  height: 10px;
  background: #a3fdfe;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 44px;
}
.list-text{
  width: 80%;
  height: 100%;
  padding: 30px 30px;
  overflow: hidden;
  box-sizing: border-box;
}
.list-text .text-top{
  font-size: 22px;
  text-align: left;
  line-height: 1.8;
}
.list-text .text-con{
  font-size: 22px;
  text-align: left;
  line-height: 1.8;
}
.list-text .text-bottom{
  overflow: hidden;
  /*white-space: nowrap;*/
  text-overflow: ellipsis;
  text-align: justify;
  line-height: 2;
  /*font-size: 18px;*/
}
/*手机版*/
/*顶部*/
.iphone-box{
  width: 62%;
  height: 50px;
  position: relative;
  /*background: pink;*/
}
.iphone-line{
  width: 24%;
  height: 2px;
  position: absolute;
  left: 0;
  /*right: 0;*/
  top: 32%;
  bottom: 0;
  margin: 0 auto;
  /*z-index: 99;*/
  background: white;
}
.iphone-size{
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing:4px;
  text-align: left;
  position: absolute;
  bottom: 0;
}
/*列表*/
.iphone-list{
  margin-top: 16px;
  width: 62%;
  height: auto;
  background: #003432;
  /*display: flex;*/
  overflow: hidden;
  cursor: pointer;
}
.iphone-list-active{

}
.iphone-list-top{
  width: 100%;
  height: 50%;
}
.iphone-list-top img{
  width: 100%;
  height: 100%;
}
.iphone-list-con{
  width: 100%;
  height: 50%;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
}
.iphone-list-dian{
  width: 10%;
  height: 100%;
  position: relative;
}
.iphone-dian-y{
  width: 10px;
  height: 10px;
  background: #a3fdfe;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 19px;
}
.iphone-list-text{
  width: 90%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  /*background: rebeccapurple;*/
}
.iphone-list-text .iphone-text-top{
  font-size: 1rem;
  text-align: left;
  line-height: 1.8;
}
.iphone-list-text .iphone-text-con{
  font-size: 1rem;
  text-align: left;
  line-height: 1.8;
}
.iphone-list-text .iphone-text-bottom{
  overflow: hidden;
  font-size: .2rem;
  /*white-space: nowrap;*/
  text-overflow: ellipsis;
  text-align: justify;
  line-height: 2;
  /*font-size: 18px;*/
}

</style>
