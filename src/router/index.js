import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: "home",
    component: () => import(`@/views/JD.COM/index.vue`),
    meta: { fot: true, title: "多快好省，购物上京东！" }
  },
  {
    path: '/',
    redirect: { name: 'home' }
  },
  // {
  //   path: "/jx",
  //   redirect: { name: 'xjx' }
  // }, {
  //   path: "/cart1", name: "cart1",
  //   component: () => import(`@/views/JD.comShoppingCart/cart1.vue`),
  //   meta: { fot: false, title: "购物车", }
  // },
  // {
  //   path: "/sigin",
  //   children: [
  //     {
  //       path: "my",
  //       component: () => import(`@/components/Coworking/my/index`),
  //     },
  //   ]
  // }
]

// var new_json = [
//   {
//     title: "京东商品分类 - 京东商城",
//     path: "class",
//     file: 'JD.comClassification',
//   },
//   {
//     title: "购物车",
//     path: "cart",
//     file: 'JD.comShoppingCart',
//   }, {
//     title: "我的",
//     path: "my",
//     file: 'JD.comShoppingMy',
//   },
// ];
// new_json.forEach((item) => {
//   var title = item.title;
//   var path = item.path;
//   var file = item.file;
//   var temp = {
//     path: '/' + path,
//     name: path,
//     component: () => import(`@/views/${file}/index.vue`),
//     meta: { title: title, fot: true }
//   }
//   routes.push(temp);
// })
// var pleasantlySurprised = [
//   {
//     title: "惊喜",
//     path: "xjx",
//     file: "pleasantlySurprised",
//   },
//   {
//     title: "惊喜分类",
//     path: "xjxf",
//     file: "SurpriseClassification",
//   },
//   {
//     title: "惊喜直播",
//     path: "xjxz",
//     file: "SurpriseLiveBroadcast",
//   },
//   {
//     title: "惊喜wode",
//     path: "xjxw",
//     file: "SurpriseMe",
//   },
// ]
// pleasantlySurprised.forEach((item) => {
//   var title = item.title;
//   var path = item.path;
//   var file = item.file;
//   var temp = {
//     path: '/' + path,
//     name: path,
//     component: () => import(`@/views/${file}/index.vue`),
//     meta: { title: title, fot: false }
//   }
//   routes.push(temp);
// })
// var nan = [
//   {
//     title: "",
//     path: 'details',
//   },
//   {
//     title: "京东登录注册",
//     path: "sigin",
//   },
//   {
//     title: "自营纸品湿巾-商品搜索-京东",
//     path: "similar"
//   },
//   {
//     path: 'search',
//     title: '搜索！'
//   },
//   {
//     path: 'HeadStore',
//     title: '店铺'
//   },
//   {
//     path: 'axios',
//     title: "异步"
//   }
// ]
// nan.forEach((item) => {
//   var title = item.title;
//   var path = item.path;
//   var temp = {
//     path: '/' + path,
//     name: path,
//     component: () => import(`@/views/${path}/index.vue`),
//     meta: { title: title, fot: false }
//   }
//   routes.push(temp);
// })

const router = createRouter({
  mode: 'history',  //去掉url中的#
  // linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // if(router.app.$store != undefined){
  //   router.app.$store.commit('Basics', 'get_jd_category_one')
  //   router.app.$store.commit('Basics', 'get_jd_category_two')
  //   router.app.$store.commit('Basics', 'get_jd_category_three')
  //   console.log(router.app.$store.state.dataNum)
  // }
  next()
})

export default router