<template>
    <nav class="mainHeader">
        <div class="headerItem">
            <router-link to="blog" class="link">博客</router-link>
        </div>

        <div class="headerItem">
            <router-link to="music" class="link">音乐</router-link>
        </div>

        <div class="headerItem">
            <router-link to="tool" class="link">工具</router-link>
        </div>

        <div class="headerItem">
            随笔
        </div>

        <div class="headerItem">
            关于
        </div>
    </nav>
</template>

<script>
export default {
    name: "mainHeader"
}
</script>

<style scoped>
.link{
    text-decoration: none;
}
/*标题栏主体样式*/
.mainHeader{
    width: 90%;
    height: 50px;
    background-color: rgba(28, 146, 231, 0.2);
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 15px;
}

/*标题item样式*/
.headerItem{
    height: 85%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 1px;
    border: 1px solid rgb(188, 27, 206,0.2);
    border-radius: 3px;
    letter-spacing: 1px;
    text-decoration: none;
}

.headerItem:hover{
    cursor: pointer;
    color: #0815ef;
    border: 1px solid #b0eab0;
    transition-duration: 0.2s;
}
</style>