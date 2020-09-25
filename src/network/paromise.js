/* eslint-disable no-unused-vars */
// import axios from 'axios';
import { request, requestPost } from './require'
// const get = () => {
//     console.log('get请求');
// }
// const post = () => {
//     console.log('post请求')
// }
// export{
//     get,
//     post
// }
// process.env.NODE_ENV环境
// let baseURL;
// if (process.env.NODE_ENV == 'development') {
// baseURL = 'http://132.232.94.151:3000/api'
//     baseURL = 'http://106.12.85.17:8090/vuedemo/'
// } else {
//     baseURL = '/xxx'
// }
// baseURL es6 方法
// const $http = axios.create({
//     baseURL,
// })
// create 是axios自带的方法
export const get = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        request({ url, params }).then(res => {
            // res.data.msg === "success"
            if (res.status === 200) {
                console.log(res.data)
                resolve(res.data);
            } else {
                console.log(res, reject)
                resolve(res)
                // alert(res.data.msg)
            }
        }).catch(error => {
            alert('网络异常', error);
        })
    })
}

export const post = (url, data) => {
    data = data || {};
    console.log(url, data)
    return new Promise((resolve, reject) => {
        requestPost({ url, data }).then(res => {
            if (res.status === 200) {
                resolve(res.data);
            } else {
                console.log(res, reject)
                resolve(res)
                // alert(res.data.msg);
            }
        }).catch(error => {
            alert('网络异常', error);
        })
    })
}




// var axios = {
//     get: function (url) {
//         return new Promise((resolve, reject) => {
//             var xhr = new XMLHttpRequest()
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState !== 4) {
//                     return
//                 }
//                 if (xhr.status = 1) {
//                     resolve(xhr.responseText)
//                 } else {
//                     console.log('请求失败！')
//                 }
//             }
//             xhr.open('GET', url, true)
//             xhr.send()
//         })
//     }
// }
// let text1 = axios.get('test-data.json')//传入url
// text1.then(res => {
//     let text2 = JSON.parse(res)//把获得的json字符串转换成对象
//     console.log(text2.data.userList[0].name)  //张三
// })