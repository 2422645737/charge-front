<template>
    <div class="box">
        <input class="input" type="text" :value="content">
    </div>
</template>

<script>
export default {
    name: "shiyueInput",
    props:["content"],
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.box{

    display: flex;
    align-items: center;
    justify-content: center;
}
.input{
    width: 200px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 2px;

    font-family: HarmonyOS;
    font-size: 17px;

    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 8px;

    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    border: 1px solid transparent;

    transition-duration: 0.5s;
    text-shadow: 1px 1px 2px #e1e1e1;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.input:hover{
    transition-duration: 0.5s;
    border: 1px solid #b3b3ee;
}
.input:focus{
    transition-duration: 7.5s;
}
@font-face {
    font-family: 'HarmonyOS';
    src: url("/public/static/css/HarmonyOS_Sans_Regular.ttf") format('truetype');
}
</style>