<template>
<div id="nav">
    <!--<router-link to="/">Home</router-link> |-->
    <router-view />
</div>
</template>

<script>
export default {
    name: "App",
    created() {
        this.Defaultdata();
    },
    methods: {
        Defaultdata() {
            console.log(this.$store);
            console.log(this.$store.state);
            console.log(this.$store.state.miss);
            this.$store.dispatch("actionstimeto", 2);
            console.log();
        },
    },
};
</script>

<style lang="less" scoped></style>
