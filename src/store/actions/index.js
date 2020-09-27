const actions = {
    actionsJia(context, n = 0) {
        console.log(context)
        return context.commit('jia', n)
    },
    actionsJian({ commit }, n = 0) {
        return commit('jian', n)
    },
    actionstimeto(context, setHours) {
        return context.commit('timeto', setHours)
    }
}
// add(context) {
// context.commit('add')
// }
//vue-cli this.$store.dispatch('add')
export default actions