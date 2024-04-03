<template>
    <div id="app">
        <div class="mainStyle">
            <main-header></main-header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import mainHeader from "@/components/mainHeader";
import mainContainer from "@/components/mainContainer";
export default {
    name: 'App',
    components: {
        mainHeader,
        mainContainer
    },
    methods:{
    }
}
</script>

<style>
.mainStyle{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
}
</style>
