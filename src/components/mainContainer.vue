<template>
    <div class="mainBody">
        <router-view></router-view>
    </div>
</template>

<script>
import articlePanel from "@/components/articlePanel";
export default {
    name: "mainContainer",
    components:{
        articlePanel
    },
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.mainBody{
    width: 90%;
    height: 700px;
    /*background-color: #7c6161;*/
}
.el-card{
    background-color: black;
    height: 100px;
    width: 100px;
}
.image{
    height: 500px;
    width: 500px;
}
</style>