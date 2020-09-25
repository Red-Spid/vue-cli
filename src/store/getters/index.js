const getters = {
    getterCount(state) {
        console.log(state.count);
    },
    getters(state, getters) {
        console.log(state.count, getters);
    },
    rootState(state, getters, rootState) {
        console.log(state.count, getters, rootState.count);
    }
}
export default getters