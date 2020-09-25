const state = {
    count: 0,//全局计数
    item_: 0,//全局计数
    num: 1,//从1开始
    temporary: [{}, {}, [{}, {}]],//暂时用户 未登录用 商品存储
    data: [],//浏览的数据
    pastData: [],//上一次浏览的数据
    globalTime: {},//当前登录的时间
    pastTime: {},//上一次登录的时间
    PhoneModel: {},//手机的型号
    hobby: {},//浏览的爱好 用户喜欢的商品   模糊匹配/默认推荐商品
    total: [],//总数居
    miss: 3000,//动画秒数
    user: false,//用户登陆状态
    userName: [{}, {}],//用的信息记录
    storage: [{}, {}, [{}, {}]],//本地缓存购物车数据
    dataUrl: [],//请求的url 
    banner: [{}, {}, {}],//默认的轮播图 活动数据
    urlTo: [],//记录路由的访问记录
    sedRes: [],//配送状态
    piceMyErr: [],//评论是否 信息
    noMyShop: [],//放弃购物
    timeData: [],//当天的推荐商品
    timeTo: [],//当前推荐的分类
    thisMy: [],//个人位置信息
}
export default state