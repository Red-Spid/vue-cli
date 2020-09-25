import ax from '@/network/axios'
export function good(a) {//数据获取
    ax.req().then(res => {
        a.Routing = res.data;
    })
}

export function api(a, b) {// 国家请求
    ax.ipt().then(res => {
        // continent 周 国 country area_code 号
        var c = res.split('=')[1];
        var adress = JSON.parse(c.substring(0, c.length - 1)).cname
        if (adress == 'CHINA') {
            adress = '中国'
        }
        b.country = adress
    })
}

// export function ListOfCities(a) {
//     return ax.ListOfCities(a).then(res => {
//         if (res == undefined) {
//             return a
//         }
//     })
// }


//async/await
export async function all(a, b) {// provinces cities areas
    await ax.all(b).then(res => {
        a.total = res;
        window.localStorage.setItem("query", JSON.stringify(a))
        return a
    })
}
