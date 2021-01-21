import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
    //首页
    {
        path: "/",
        name: "index",
        component: () => import("../views/homepage/HomepageIndex.vue")
    },
    //苞米集
    {
        path: "/case",
        name: "case",
        component: () => import("../views/case/CaseIndex.vue")
    },
    //全链路设计卡片
    {
        path: "/card",
        name: "card",
        component: () => import("../views/card/CardIndex.vue")
    },
    // 云数据平台
    {
        path: "/platform",
        name: "platform",
        component: () => import("../views/platform/PlatformIndex.vue")
    },
    //联系我们
    {
        path: "/concerning",
        name: "concerning",
        component: () => import("../views/concerning/ConcerningIndex.vue")
    },
    // 加入我们
    {
        path: "/join",
        name: "join",
        component: () => import("../views/join/JoinIndex.vue")
    },
    // 最新动态
    {
        path: "/trends",
        name: "trends",
        component: () => import("../views/trends/TrendsIndex.vue")
    },
    // 全球研发
    {
        path: "/research",
        name: "research",
        component: () => import("../views/research/ResearchIndex.vue")
    },
    //登录/注册
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/LoginIndex.vue")
    },
];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});

// router.beforeEach((to,from,next)=>{
//     if (to.matched.length === 0) { //匹配前往的路由不存在
//         from.name ? next({
//             name: from.name
//         }) : next({path:'/'}); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
//     } else {
//         if(to.path === '/' || to.path === '/logout' || to.path === '/registered' || sessionStorage.getItem('token_str')){
//             next();
//         }else{
//             sessionStorage.clear();
//             next({
//                 path:'/'
//             });
//         }
//     }
// })

// router.beforeEach((to, from, next) => {
//     if (from.path === '/vip') {
//         if (!confirm('确定要跳转吗？')) {
//             next(false)
//             return
//         }
//     }
//     next(true)
// })

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath);
    }
});


export default router;
