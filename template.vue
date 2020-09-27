<template>
<div></div>
</template>

<script>
export default {
    name: "activity",
    props: {
        item_: {
            type: Array,
            default: [],
            // default: function () {
            //     return {
            //         cit: [],
            //     };
            // },
        },
    },
    data() {
        return {};
    },
    components: {},
    directives: {
        // 注册一个局部的自定义指令 v-focus
        focus: {
            // 指令的定义
            inserted: function (el) {
                // 聚焦元素
                el.focus();
            },
        },
    },
    computed: {},
    watch: {},
    created() {
        this.a();
    },
    methods: {
        a() {},
    },
};
</script>

<style lang="less" scoped>
@import "assets/css/??/index.less";
</style>
