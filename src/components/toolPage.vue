<template>
    <div class="main">
        <div class="tool-card" @click="showDialog('sqlGenerator')">
            <div class="tool_name" slot="card">
                SQL生成器
            </div>
            <div class="tool_remark" slot="card">
                支持生成默认的SQL语句
            </div>
        </div>

        <el-dialog title="SQL生成器" :visible.sync="sqlGeneratorDialog" :close-on-click-modal="false" :destroy-on-close="true">
            <code-generator></code-generator>
        </el-dialog>
    </div>
</template>

<script>
import codeGenerator from "@/components/littleTool/codeGenerator";
import shiyueCard from "@/components/littleTool/shiyueCard";
export default {
    name: "toolPage",
    components:{
        codeGenerator,
        shiyueCard
    },
    data(){
        return{
            sqlGeneratorDialog:false
        }
    },
    methods:{
        showDialog(toolName){
            switch (toolName){
                case 'sqlGenerator':this.sqlGeneratorDialog = true;
            }
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
}
.tool-card{
    height: 90px;
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #a4a7d9;
}
.tool-card:hover{
    cursor: pointer;
}
.tool_name{
    height: 20%;
    width: 90%;
    margin-left: 5px;
    margin-top: 3px;
    text-align: left;
}
.tool_remark{
    height: 20%;
    width: 90%;
    margin-top: 15px;
    margin-left: 5px;
    font-size: 14px;
    text-align: left;
}
</style>