<template>
    <div class="main">
        <shiyue-card class="shiyue_card">
            <div slot="card" class="item" v-for="(item,index) in tagList" :key="index">
                {{item}}
            </div>
        </shiyue-card>
    </div>
</template>

<script>
import shiyueCard from "@/components/littleTool/shiyueCard";
export default {
    name: "tagDialog",
    components:{
        shiyueCard
    },
    data(){
        return{
        }
    },
    props:["tagList"]
}
</script>

<style scoped>
.shiyue_card{
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
}
.item{
    width: 60px;
    height: 27px;
    border-radius: 5px;
    border:1px solid #d7d7fd;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition-duration: 0.3s;
    font-family: HarmonyOS;
}
.item:hover{
    cursor: pointer;
    background-color: rgba(170, 248, 248, 0.7);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.35) 0px 3px 10px 3px;
    transition-duration: 0.3s;
}
</style>