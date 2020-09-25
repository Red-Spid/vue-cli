const moduleA = {
  state: () => ({ 'moduleA': 222 }),
  mutations: {},
  actions: {},
  getters: {}
}

const moduleB = {
  state: { 'moduleB': 11, n: 10, f: 20, c: "链接成功", e: function () { }, },
  mutations: {},
  actions: {}
}
const modules = {
  a: moduleA,
  b: moduleB
}
export default modules