<template>
  <div class="hello">
    <el-row :span="24" style="display: flex;justify-content: space-between">
      <el-col :span="4" class="hidden-md-and-up images-box">
        <div class="grid-content bg-purple">
          <img :src="images" alt="">
        </div>
      </el-col>
      <el-col :span="16" class="hidden-sm-and-down header-box">
        <div class="grid-content bg-purple" @click="$router.push({name:'index'})">{{$t('user.home') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'case'})">{{ $t('user.boringmedia') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'card'})">{{ $t('user.linkcard') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'platform'})">{{ $t('user.clouddata') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'research'})">{{ $t('user.RD') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'trends'})">{{ $t('user.news') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'concerning'})">{{ $t('user.contactus') }}</div>
        <div class="grid-content bg-purple" @click="$router.push({name:'join'})">{{ $t('user.joinus') }}</div>
      </el-col>
      <el-col :span="4" class="hidden-sm-and-down header-box">
        <div class="grid-content bg-purple" @click="$router.push({name:'login'})">{{ $t('user.login') }}/{{ $t('user.register') }}</div>
<!--        <div class="grid-content bg-purple" @click="changeLanguage()">{{$t('language.name')}}</div>-->
      </el-col>
      <!--隐藏-->
      <el-col :span="4" class="hidden-md-and-up">
        <div @click="toggle()" class="icon-box">
          <!--          <transition  name="slide-fade">-->
          <!--            <i class="el-icon-s-operation" v-show="icon"></i>-->
          <!--          </transition >-->
          <!--          <transition name="slide-fade1">-->
          <!--            <i v-show="button" class="el-icon-close"></i>-->
          <!--          </transition>-->
          <i class="el-icon-s-operation" v-show="icon" @click="sendMsg"></i>
          <i v-show="button" class="el-icon-close" @click="sendMsg1"></i>
        </div>
      </el-col>
    </el-row>

    <el-col v-show="isActive" class="box-show">
      <el-col class="show-box">
        <div class="show-text" @click="$router.push({name:'index'})">{{ $t('user.home') }}</div>
        <div class="show-text" @click="$router.push({name:'case'})">{{ $t('user.boringmedia') }}</div>
        <div class="show-text" @click="$router.push({name:'card'})">{{ $t('user.linkcard') }}</div>
        <div class="show-text" @click="$router.push({name:'platform'})">{{ $t('user.clouddata') }}</div>
        <div class="show-text" @click="$router.push({name:'research'})">{{ $t('user.RD') }}</div>
        <div class="show-text" @click="$router.push({name:'trends'})">{{ $t('user.news') }}</div>
        <div class="show-text" @click="$router.push({name:'concerning'})">{{ $t('user.contactus') }}</div>
        <div class="show-text" @click="$router.push({name:'join'})">{{ $t('user.joinus') }}</div>
        <div class="show-text" @click="$router.push({name:'login'})">{{ $t('user.login') }}/{{ $t('user.register') }}</div>
<!--        <div class="show-text" @click="changeLanguage()">{{$t('language.name')}}</div>-->
      </el-col>
      <!--       <div class="black-box"></div>-->
    </el-col>

  </div>
</template>

<script>
export default {
  name: 'Header',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      isActive:false,
      button:false,
      icon:true,
      images:require('@/assets/img/logo.png'),
      msg:'block',
      msg1:'none'
    };
  },
  methods: {
    //中英文切换
    changeLanguage(){
      this.$i18n.locale=='cn'?this.$i18n.locale='en':this.$i18n.locale='cn'   //设置中英文模式
      localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
    },
    remind(){
      this.$toast(this.$t('user.loginUsername'))
    },
    toggle() {
      this.isActive = !this.isActive;
      this.button = !this.button;
      this.icon = !this.icon
    },
    sendMsg(){
      //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit('func',this.msg)
    },
    sendMsg1(){
      this.$emit('fun',this.msg1)
    }

    // emittoparent(){
    //   this.emit('child-event')
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*弹框*/
/deep/.el-popover__reference{
  height: 60px;
  background: #d3dce6;
  border: none!important;
  border-radius: 4px;
}
.box-show{
  position: absolute;
  /*z-index: 99;*/
  /*width: 100%;*/
  top: 108%;
  padding: 0 6px 6px 6px;
  box-sizing: border-box;
  /*background: white;*/
  background-color: rgba(0, 0, 0, 0.3);
}
.show-box{
  /*background: white;*/
  border-radius: 4px;
  overflow: hidden;
  padding: 0 10px 6px;
}
.show-text{
  color: white;
  /*background: white;*/
  font-size: 12px;
  line-height: 1.5;
  /*border-bottom: 1px solid #99a9bf;*/
  padding: 6px 0;
  text-align: left;
  cursor: pointer;
  /*background: black;*/
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  /*background: #d3dce6;*/
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 0 20px;
  font-size: 1.9vh;
  cursor: pointer;
}
.grid-content img{
  width: 60px;
  object-fit: cover;
  position: relative;
  top: 14px;
}
/*图标*/
.icon-box{
  cursor: pointer;
  position: absolute;
  right: 4%;
}
.icon-box i{
  font-size: 22px;
  color: white;

}
/*头部*/
.header-box{
  display: flex;
  white-space: nowrap;
  height: 80px;
  overflow: hidden;
  width: auto!important;
  /*margin: 0;*/
}
.images-box{
  /*background: pink;*/
  position: absolute;

}
.black-box{
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  opacity: .2;

}
/*.slide-fade-enter-active {*/
/*  transition: all .3s ease;*/
/*}*/
/*.slide-fade-leave-active {*/
/*  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
/*.slide-fade-enter, .slide-fade-leave-to*/
/*!* .slide-fade-leave-active 用于 2.1.8 以下版本 *! {*/
/*!*  transform: translateX(10px);*!*/
/*  opacity: 0;*/
/*}*/
/*.slide-fade1-enter-active {*/
/*  transition: all .3s ease;*/
/*}*/
/*.slide-fade1-leave-active {*/
/*  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
/*.slide-fade1-enter, .slide-fade1-leave-to*/
/*!* .slide-fade-leave-active 用于 2.1.8 以下版本 *! {*/
/*!*  transform: translateX(10px);*!*/
/*  opacity: 0;*/
/*}*/
</style>
