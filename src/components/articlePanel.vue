<template>

    <div class="panelMain">
        <!--左侧面板区域-->
        <div class="left_panel">

            <!--文章标题区域-->
            <div class="article_title">
                <div class="title_content">{{this.article.title}}</div>
                <div class="title_info">
                    <div class="article_author">
                        <img src="../assets/作者.png" alt="" class="author_logo">
                        <span>shiyueoe</span>
                    </div>
                    <div class="create_time">
                        <img src="../assets/日期.png" alt="" class="create_time_logo">
                        <span>{{this.article.createTime}}</span>
                    </div>
                    <div class="count">
                        <img src="../assets/阅读量.png" alt="阅读量" class="count_logo">
                        <span>49</span>
                    </div>
                </div>
            </div>
            <div class="article-content-box">
                <markdown-preview :content="this.article.content"></markdown-preview>
            </div>

        </div>
        <!--右侧面板-->
        <div class="right_panel">
            <div class="catalog_title">标签</div>
            <tag-dialog class="tag_dialog" :tagList="this.article.tagList"></tag-dialog>
        </div>
    </div>
</template>

<script>
import shiyueInput from "@/components/littleTool/shiyueInput";
import shiyueCard from "@/components/littleTool/shiyueCard";
import tagDialog from "@/components/tagDialog";
import markdownPreview from "@/components/littleTool/markdownPreview";
import moment from "moment";
export default {
    name: "articlePanel",
    components:{
        shiyueInput,
        shiyueCard,
        tagDialog,
        markdownPreview
    },
    mounted() {
        this.$http.get("article/findById?articleId=1").then(
            res => {
                console.log(res.data)
                this.article.content = res.data.data.content
                this.article.title = res.data.data.title
                this.article.createTime = moment(res.data.data.createTime).format("YYYY-MM-DD")
                res.data.data.tagList.forEach(e => {
                    this.article.tagList.push(e.tagName)
                })
            }
        )
    },
    data(){
        return {
            article:{
                content:'',
                title:'',
                createTime:'',
                tagList:[]
            },
        }
    },
    methods:{

    }

}
</script>

<style scoped>
.tag_dialog{
    width: 100%;
}
.catalog_title{
    width: 100%;
    height: 50px;
    letter-spacing: 2px;
    font-family: HarmonyOS;
    font-size: 16px;
    font-weight: bold;
    background-color: rgba(65, 168, 224, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
}
.count{
    display: flex;
    align-items: center;
    font-family: HarmonyOS;
}
.count_logo{
    width: 15px;
    height: 15px;
    margin-left: 3px;
    margin-right: 3px;
}
.author_logo{
    height: 14px;
    width: 14px;
    margin-left: 3px;
    margin-right: 5px;
}
.panelMain {
    width: 100%;
    height: auto;
    /*background-color: red;*/
    display: flex;
    flex-direction: row;
}

/*左侧主内容区域*/
.left_panel {
    width: 70%;
    height: 100%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
}

/*右侧主内容区域*/
.right_panel {
    width: 28%;
    height: 100%;
}

/*文章标题区域*/
.article_title {
    width: 100%;
    height: 80px;

}

/*文章标题内容*/
.title_content {
    height: 40px;
    width: 100%;
    background-color: rgba(135, 139, 192, 0.2);
    font-weight: bold;
    border-radius: 3px;
    font-size: 19px;
    padding-top: 10px;
    font-family: HarmonyOS;
    letter-spacing: 2px;
}

/*标题详细信息*/
.title_info {
    height: 30px;
    width: 100%;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: HarmonyOS;
    color: rgba(42, 41, 41, 0.6);
}

/*作者信息*/
.article_author {
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: "HarmonyOS Sans TC";
}

.create_time {
    margin-left: 10px;
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    font-family: HarmonyOS;
    margin-right: 10px;
}
.create_time_logo{
    width: 15px;
    height: 15px;
    margin-left: 3px;
    margin-right: 5px;
}
/*文章内容区域*/
.article-content-box {
    width: 100%;
    height: 700px;
    margin-top: 20px;
    background-color: #eeeff5;
    border-radius: 4px;
}



</style>