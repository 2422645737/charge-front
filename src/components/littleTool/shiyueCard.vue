<template>
    <div class="box">
        <slot name="card"></slot>
    </div>
</template>

<script>
export default {
    name: "shiyueCard"
}
</script>

<style scoped>
.box{
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    border-radius: 3px;

    margin: 1px 1px;

    padding: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

}
@font-face {
    font-family: 'HarmonyOS';
    src: url("/public/static/css/HarmonyOS_Sans_Regular.ttf") format('truetype');
}
</style>