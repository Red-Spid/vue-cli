import axios from 'axios'
import { request, requestIp, requestPost } from './require'
/*
  get_jd_category_one three two
  get_jd_feature
  get_jd_tabbar
  homebanner
*/
axios.defaults.baseURL = 'http://106.12.85.17:8090/vuedemo/'

function single(a) {
  return request(a).then((res) => {
    return res.data
  })
}
function json() {
  return request('https://red-spid.github.io/data/json/jx.json')
    .then(res => {
      return res.data
    })
}
function single1(a) {
  return request(a);
}

function one(a) {
  return request(a).then(res => {
    return res.data
  })
}
function all(a) {
  var total = [], ReturnData = []
  a.forEach((val) => {
    total.push(one(val))
  })
  return axios.all(total)
    .then(
      axios.spread(function () {
        Object.keys(arguments).forEach((val) => {
          ReturnData.push(arguments[val])
        })
        return ReturnData
      })
    )
}

function goods() {
  return request('get_goods', {
    params: {
      page: 1,
      // pagesize:10,
    }
  }).then(res => {
    return res.data
  })
}

function req(a) {
  return request({
    url: "get_goods",
    params: {
      exact: {
        id: a,
      },
    }
  })
}
function ipt() {
  return requestIp()
}
function if1(a, b) {
  return request({
    url: a,
    params: {
      telphone: b
    }
  })
}

requestPost({
  url: 'register',
  params: {
    telphone: '177777777777',
    password: '123123123',
    arecode: "86"
  }
}).then(res => {
  return res
  // console.log(res)
})


function ListOfCities(a, b, c) {
  request({//城市
    url: c,
    params: b
  }).then(res => {
    a.push(res.data)
    // console.log(a)
  })
}

// request({//商品详情
//   url: "get_goodsDet",
//   params: {
//     goods_id: 5
//   }
// }).then(res => {
//   console.log(res)
// })
var data = {
  actionKey: "account",
  username: "mazhaoguo", //13512345678
  password: "1234567",
};
var url = 'land'
requestPost({//用户
  url,
  data
}).then(res => {
  console.log(res, '改变')
})

// function la(url, data) {
//   requestPost({//用户
//     url,
//     data
//   }).then(res => {
//     console.log(res, '改变')
//   })
// }
// requestPost({//购物车
//   url: "get_shopcart",
//   data: {
//     "user_id": '4',
//   }
// }).then(res => {
//   console.log(res)
// })

// async/await 将 axios 异步请求同步化处理
export default {
  all, goods, req, ipt, if1, single, single1, json, ListOfCities,
}
// var record=function(a){
//   axios.get(a,{
//         params: {

//         }
//   })
//   .then(res => {
//     console.log('数据是:', res.data.data);
//     return res.data;
//   })
  // .catch((e) => {
  //   console.log('获取数据失败',e);
  // });
// }
