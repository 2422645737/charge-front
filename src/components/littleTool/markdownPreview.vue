<template>
<div class="main">
    <div v-html="md" class="area"></div>
</div>
</template>

<script>
import {marked} from "marked"
import prism from "prismjs"
export default {
    name: "MarkdownPreview",

    components:{

    },
    data(){
        return {
            md:''
        }
    },
    mounted() {
        console.log('哈哈哈哈' + this.content)
        this.md = this.content;
        const reg = new RegExp("<pre", "g");
        const temp = marked(this.md);
        const str = temp.replace(reg, `<pre class = "line-numbers"`);
        this.md = str;
        setTimeout(() => {
            prism.highlightAll();
        },0)
    },
    watch:{
        content(newValue){
            this.content = newValue;
            this.refreshMarkdown()
        }
    },
    methods:{
        refreshMarkdown(){
            this.md = this.content;
            const reg = new RegExp("<pre", "g");
            const temp = marked(this.md);
            const str = temp.replace(reg, `<pre class = "line-numbers"`);
            this.md = str;
            setTimeout(() => {
                prism.highlightAll();
            },0)
        }
    },
    props:['content']
}
</script>

<style scoped>
.main{
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.area >>> {
    text-align: left;
    width: 98%;
    height: 100%;
}
</style>