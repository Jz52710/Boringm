import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
//引入Element
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// import 'element-ui/lib/theme-chalk/display.css';//断点隐藏类
// // import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI, { locale })
import Element from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.config.productionTip = false
Vue.use(Element);


//中英文切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n=new VueI18n({
    locale:localStorage.getItem('languageSet')||'cn',   //从localStorage里获取用户中英文选择，没有则默认中文
    messages:{
        'cn':require('./components/language/cn'),
        'en':require('./components/language/en')
    }
})
//引入swiper
// import Swiper from '@/swipe/swiper.min.js'
// Vue.use(Swiper)
import "./assets/css/swiper.min.css";

//字体
import './assets/font/font.css'

//联系我们
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'T7E4WHQ3ySIiQFnfWAGutOnmDwG5DCLp'
})

Vue.config.productionTip = false

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
    // Swiper,
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
