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

          <div class="swiper-container swiper-container-initialized swiper-container-vertical">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images1" alt="">
              </div>

              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images2" alt="">
              </div>
              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images3" alt="">
              </div>
              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images4" alt="">
              </div>
              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images5" alt="">
              </div>
              <div class="swiper-slide swiper-slide-active ani-slide">
                <div class="text hidden-sm-and-down">{{ $t('content.baner1') }}</div>
                <p class="text-bt hidden-sm-and-down">{{ $t('content.baner2') }}</p>
                <p class="slogan-box hidden-sm-and-down">service for every busineness</p>
                <p class="case-box hidden-sm-and-down">案例：Boringmedia为上汽R汽车打造的数字化售车体验空间   ></p>
                <!-- 隐藏-->
                <div class="text-show hidden-md-and-up">{{ $t('content.baner1') }}</div>
                <p class="text-bt-show hidden-md-and-up">{{ $t('content.baner2') }}</p>
                <p class="slogan-box-show hidden-md-and-up">service for every busineness</p>
                <p class="case-box-show hidden-md-and-up">案例:Boringmedia为上汽R汽车打造的数字化售车体验空间></p>
                <img :src="images6" alt="">
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
          <!--logo-->
          <div class="img-box hidden-sm-and-down">
            <img :src="logo" alt="">
          </div>
          <!--字体-->
          <div class="size-box hidden-sm-and-down">
            <img :src="gif" alt="">
          </div>
          <div class="size-box-show hidden-md-and-up">
            <img :src="gif" alt="">
          </div>
          <!--          <div class="swiper-pagination"></div>-->
          <!--线-->
          <div class="line-box"></div>
          <!--蒙版-->
          <div class="box-show" :style="{ display: this.boxShadow}"></div>
        </div>
      </el-main>

      <el-footer></el-footer>
    </el-container>

  </div>

</template>

<script>
import Header from '@/components/header/Header.vue'
import Swiper from "@/swipe/swiper.min.js";

export default {
  name: 'HomepageIndex',
  components: {
    Header,
  },
  data() {
    return {
      images1:require('../../assets/img/banner/bt6.png'),
      images2:require('../../assets/img/banner/bt1.jpg'),
      images3:require('../../assets/img/banner/bt2.jpg'),
      images4:require('../../assets/img/banner/bt3.jpg'),
      images5:require('../../assets/img/banner/bt4.jpg'),
      images6:require('../../assets/img/banner/bt5.jpg'),
      logo:require('../../assets/img/logo.png'),
      gif:require('../../assets/img/hd.gif'),
      msgFormSon:'fu',
      boxShadow:'none',
    };
  },
  methods: {
    _initSwiper(){

    },
    // parentEvent(data){
    //   console.log(data)
    // }
    getMsgFormSon(data){
      this.boxShadow = data
      // console.log(this.boxShadow)
    },
    getMsg1FormSon(data){
      this.boxShadow = data
      // console.log(this.boxShadow)
    }


  },
  mounted() {


    new Swiper('.swiper-container',{
      direction : 'vertical',
      followFinger : false,
      speed:800,
      mousewheel: true,
      pagination : {
        el:'.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        // dynamicMainBullets: 1,
      },
      on:{
        init:function(){
          let slide=this.slides.eq(0);
          slide.addClass('ani-slide');
        },
        transitionStart: function(){
          for(let i=0;i<this.slides.length;i++){
            let slide=this.slides.eq(i);
            slide.removeClass('ani-slide');
          }
        },
        transitionEnd: function(){
          let slide=this.slides.eq(this.activeIndex);
          slide.addClass('ani-slide');

        },
      }
    });


  }
}
</script>

<style scoped>
/*@import "src/assets/css/swiper.min.css";*/
/*容器*/
.big-box{
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-header {
  /*background-color: #B3C0D1;*/
  color: white;
  text-align: center;
  line-height: 80px;
  position: absolute;
  width: 100%;
  z-index: 99;
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
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0!important;
  overflow: hidden;
}
/*中间部分*/
.main-box{
  background: rebeccapurple;
  position: relative;
  height: 100%;
}
/*轮播图*/

/*轮播*/
.swiper-wrapper{
  transition-delay:.3s;
}
.swiper-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide:nth-child(2){
  background:#3183ff;
  color:#fff;
}
.swiper-slide .text{
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  position: absolute;
  /*top: calc(24% + 40 * ((53vw + 53vh) - 520px) / 820);*/
  top: 28%;
  left: 14%;
  color: white;
  z-index: 99;
  /*font-size: 40px;*/
  /*font-size: calc(5px + 40 * ((53vw + 53vh) - 520px) / 820);*/
  letter-spacing:6px;
  font-size: 3.4rem;
}
.ani-slide .text{
  transform:translateX(0);
  opacity:1;
}
.swiper-slide .text-bt{
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  position: absolute;
  top: 35%;
  /*top: calc(24% + 100 * ((53vw + 53vh) - 520px) / 820);*/
  left: 22%;
  color: white;
  z-index: 99;
  /*font-size: 40px;*/
  /*font-size: calc(5px + 40 * ((53vw + 53vh) - 520px) / 820);*/
  letter-spacing:6px;
  font-size: 3.4rem;
}
.ani-slide .text-bt{
  transform:translateX(0);
  opacity:1;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*transform: scale(1.2, 1.2) translateX(0);*/
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  transition-property: transform;
}
.slogan-box{
  font-size: 20px;
  font-family: Azonix;
  position: absolute;
  top: 44%;
  left: 34%;
  z-index: 99;
  color: #d29e23;
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  letter-spacing:2px;
}
.ani-slide .slogan-box{
  transform:translateX(0);
  opacity:1;
}
/*轮播点*/
.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{
  top: 90%;
  right: 4%;
  width: 12px;
}
/deep/.swiper-pagination-bullet-active{
  background: white!important;
}
/deep/.swiper-pagination-bullet{
  width: 12px;
  height: 12px;
  background: white;
}

/*图片*/
.img-box{
  /*background: #2c3e50;*/
  position: absolute;
  bottom: 10%;
  left: 2%;
  z-index: 99;
}
.size-box{
  font-family: Azonix;
  position: absolute;
  bottom: 6%;
  right: -6%;
  z-index: 99;
  color: #a0813d;
  font-size: 3vh;
  letter-spacing:2px;
  /*background: url("../../assets/img/hd.gif") no-repeat center center;*/
  /*background-size: cover;*/
}
.size-box img{
  width: 50%;
}
.case-box{
  font-size: 20px;
  position: absolute;
  top: 53%;
  left: 14%;
  z-index: 999;
  color: white;
  /*color: #d29e23;*/
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  letter-spacing:2px;
  cursor: pointer;
}
.ani-slide .case-box{
  transform:translateX(0);
  opacity:1;
}
/*手机端适应*/
.size-box-show{
  font-family: Azonix;
  position: absolute;
  bottom: 4%;
  right: -18%;
  z-index: 99;
  color: #a0813d;
  font-size: 2vh;
  /*letter-spacing:2px;*/
}
.size-box-show img{
  width: 60%;
}
.text-show{
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  position: absolute;
  /*top: calc(24% + 40 * ((53vw + 53vh) - 520px) / 820);*/
  top: 36%;
  left: 8%;
  color: white;
  /*text-shadow: #fff 0 0 5px;*/
  z-index: 99;
  /*font-size: 40px;*/
  /*font-size: calc(5px + 40 * ((53vw + 53vh) - 520px) / 820);*/
  letter-spacing:6px;
  font-size: 1.4rem;
}
.ani-slide .text-show{
  transform:translateX(0);
  opacity:1;
}
.text-bt-show{
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  position: absolute;
  top: 40%;
  /*top: calc(24% + 100 * ((53vw + 53vh) - 520px) / 820);*/
  left: 24%;
  color: white;
  z-index: 99;
  /*font-size: 40px;*/
  /*font-size: calc(5px + 40 * ((53vw + 53vh) - 520px) / 820);*/
  letter-spacing:6px;
  font-size: 1.4rem;
}
.ani-slide .text-bt-show{
  transform:translateX(0);
  opacity:1;
}
.slogan-box-show{
  font-size: 12px;
  font-family: Azonix;
  position: absolute;
  top: 46%;
  left: 16%;
  z-index: 99;
  color: #d29e23;
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  letter-spacing:1px;
}
.ani-slide .slogan-box-show{
  transform:translateX(0);
  opacity:1;
}
.case-box-show{
  font-size: 12px;
  /*font-family: Azonix;*/
  position: absolute;
  top: 52%;
  left: 4%;
  z-index: 99;
  color: white;
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
  letter-spacing:1px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.ani-slide .case-box-show{
  transform:translateX(0);
  opacity:1;
}
.box{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  /*background: pink;*/
  /*width: 100px;*/
  /*height: 100px;*/
}
.line-box{
  position: absolute;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 99;
  left: 10%;
  opacity: .2;
}
.box-show{
  position: absolute;
  background: black;
  opacity: .6;
  width: 100%;
  height: 100%;
  z-index: 9;
}
/*!*图随滑动*!*/
/*.img-box{*/
/*  width: 100%;*/
/*  height: 850px;*/
/*  background: url("../../assets/img/banner/bt1.jpg") repeat-y center;*/
/*  background-attachment: fixed;*/
/*  overflow: hidden;*/
/*}*/
/*.img-box1{*/
/*  width: 100%;*/
/*  height: 850px;*/
/*  background: url("../../assets/img/banner/bt2.jpg") repeat-y center;*/
/*  background-attachment: fixed;*/
/*  overflow: hidden;*/
/*}*/

</style>
