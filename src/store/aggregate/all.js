class aaa {
    // Aggregate
    time() {//当前时间
        let date = new Date();
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1,                 //月份
                "d+": this.getDate(),                    //日
                "h+": this.getHours(),                   //小时
                "m+": this.getMinutes(),                 //分
                "s+": this.getSeconds(),                 //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds()             //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };
        // date.Format('yyyy-MM-dd hh:mm:ss.S q')
        return date.Format('yyyy-MM-dd hh:mm:ss.S q')
    }
    timeto() {//倒计时
        var date = new Date(); //1. js获取当前时间
        var min = date.getHours(); //2. 获取当前分钟
        date.setHours(min + 2); //3. 设置当前时间+10分钟：把当前分钟数+10后的值重新设置为date对象的分钟数
        /* 
        var y = date.getFullYear();
        var m = date.getMonth();
        m + 1 < 10 ? "0" + (m + 1) :m + 1;
        var d = date.getDate();
        d < 10 ? "0" + d : d;
        */
        var h = date.getHours();
        h < 10 ? "0" + h : h;
        var f = date.getMinutes();
        f < 10 ? "0" + f : f;
        var s = date.getSeconds();
        s < 10 ? "0" + s : s;
        var formatdate =
            // y +
            // "-" +
            // m +
            // "-" +
            // d +
            // " " +
            [(h - min - 1) < 10 ? "0" + (h - min - 1) : (h - min - 1)] +
            ":" +
            [(60 - f) < 10 ? "0" + (60 - f) : (60 - f)] +
            ":" +
            [(60 - s) < 10 ? "0" + (60 - s) : (60 - s)];
        //[(60 - f) < 10 ? "0" + (60 - f) : (60 - f)&& f == 0 ? f = 59 : (60 - f)]
        return formatdate
    }
    routeTo() {
        return location.pathname
    }
    local() {
        var win = window.localStorage.getItem('query')
        if (win == null) {
            var b = {
                user: [],//用户
                temporary: [],//暂时用户
                data: [],//浏览的数据
                pastData: [],//上一次浏览的数据
                time: [],//当前登录的时间
                pastTime: [],//上一次登录的时间
                PhoneModel: [],//手机的型号
                hobby: [],//浏览的爱好
                total: [],//全部的数据
            }
            window.localStorage.setItem('query', JSON.stringify(b))
        } else {
            var dow = JSON.parse(win);
            dow.pastData = win.data;
            dow.data = [];
            window.localStorage.setItem('query', JSON.stringify(dow))
        }
        return JSON.parse(window.localStorage.getItem('query'))
    }
    httpData(a) {
        return a
    }
    liveData() {

    }
    pathTo(global, url_, data_ = {}, setInterval_ = 800) {
        //路由跳转 延迟 数据传递
        // console.log(global)
        setTimeout(() => {
            // global.$router.push({
            //     path: url_,
            //     query: data_
            // });
        }, setInterval_)
    }
    _storage(global, url_, data_ = {}) {
        // global.oneTo.globalData < global.oneTo.errDate

    }
    ifMamp(val, if_) {//循环比较返回使用值
        val.forEach((item, ind) => {
            if (if_ == item) {
                return ind
            }
        })
    }
    ifObj(val, if_) {//对象循环判断
        Object.keys(val).forEach((item, ind) => {
            if (if_ == item) {
                return ind
            }
        })
    }
    parse_(val) {//去除字符串
        return JSON.parse(val)
    }
    stringify_(val) {//变成字符串
        return JSON.stringify(val)
    }
    appenchild_(val, dom_ = '-') {//添加插入
        return val.join(dom_)
    }
    winData() {//获取本地缓存
        return window.localStorage.getItem('query')
    }
    main_Data(global) {//默认启动判断用户和临时用户是否有数据
        var win = aaa.prototype.parse_(aaa.prototype.winData());
        if (win) {
            if (win.user.length >= 1) {
                console.log(
                    win, '有'
                )
                return true
            } else {
                return false;
            }
        } else {
            if (win.temporary.lengt >= 1) {
                console.log(
                    win, '没有'
                )
                return true;
            } else {
                return false;
            }
        }

        // await global.$http.get(

        // )
    }

}

var oneTo = {
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
aaa = aaa.prototype;