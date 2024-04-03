<template>
<!--    代码生成器
        根据输入的字段，自动生成对应的数据库建表语句，同时生成对应的SQL代码

-->

<div class="box">
    <form action="#" class="form">
        <div class="item">
            <span class="propertyName">表名:</span>
            <input v-model="tableName" class="input"/>
        </div>

        <div class="item">
            <span class="propertyName">字段名:</span>
            <input v-model="fieldName" class="input"/>
        </div>

        <div class="item">
            <span class="propertyName">类型:</span>
            <el-autocomplete
                class="inline-input"
                v-model="className"
                :fetch-suggestions="querySearch"
                placeholder="请输入类型"
            ></el-autocomplete>
        </div>

        <div class="item">
            <span class="propertyName">备注:</span>
            <input v-model="comment" class="input"/>
        </div>

        <button class="addButton" @click="addField()">添加</button>
    </form>

    <!--表结构-->
    <table class="fieldTable">
        <tr>
            <th>字段名</th>
            <th>类型</th>
            <th>注释</th>
        </tr>
        <tr v-for="(item,index) in this.finalList" :key="index">
            <td class="filedInfo">{{item.fieldName}}</td>
            <td class="filedInfo">{{item.className}}</td>
            <td class="filedInfo">{{item.comment}}</td>
            <td>
                <div></div>
            </td>
        </tr>
    </table>
<!--    SQL 生成语句-->
    <div class="title">SQL语句</div>
    <!--<textarea class="sqlStatement">-->
    <!--    {{sqlStatement}}-->
    <!--</textarea>-->

    <markdown-preview :content="sqlStatement" class="sql"></markdown-preview>
</div>
</template>

<script>
import markdownPreview from "@/components/littleTool/markdownPreview";
export default {
    name: "codeGenerator",
    components:{
      markdownPreview
    },
    data(){
        return {
            //表名
            tableName:'default_table',
            //字段名
            fieldName:'',
            //类型
            className:'',
            //字段注释
            comment:'',
            //默认字段集合
            defaultList:[],
            //录入字段集合
            insertList:[],
            //所有字段集合
            finalList:[],
            sqlStatement:'',

            javaObject:{
                controllerName:'',
                interfaceList:[]
            },
            //默认提示的类型
            defaultClass:[]
        }
    },
    mounted() {
        //初始化类型
        this.defaultClass.push({value:'int8',type:'int8'})
        this.defaultClass.push({value:'varchar()',type:'varchar()'})
        this.defaultClass.push({value:'timestamp',type:'timestamp'})
        //初始化变量
        this.defaultList.push({fieldName: 'invalid_flag', className: 'varchar(1)',comment:'作废标识'});
        this.defaultList.push({fieldName: 'hospital_id', className: 'int8',comment:'医院id'});
        this.defaultList.push({fieldName: 'his_org_id', className: 'int8',comment:'机构ID'});
        this.defaultList.push({fieldName: 'his_creater_id', className: 'int8',comment:'创建人身份ID'});
        this.defaultList.push({fieldName: 'his_creater_name', className: 'varchar(64)',comment:'创建人名称'});
        this.defaultList.push({fieldName: 'his_create_time', className: 'TIMESTAMP',comment:'创建时间'});
        this.defaultList.push({fieldName: 'his_updater_id', className: 'int8',comment:'更新用户ID'});
        this.defaultList.push({fieldName: 'his_update_time', className: 'TIMESTAMP',comment:'更新时间'});
        this.defaultList.push({fieldName: 'version', className: 'int2',comment:'乐观锁标志'});

        this.generateSQL();
    },
    methods: {
        //生成SQL语句
        generateSQL(){
            this.finalList = this.insertList.concat(this.defaultList)
            this.sqlStatement = ''
            this.sqlStatement = '```sql\n'
            this.sqlStatement += "CREATE TABLE IF NOT EXISTS mz." + this.tableName + "(\n";
            this.finalList.forEach(item => {
                this.sqlStatement += ( '\t' + item.fieldName + ' ' + item.className + ' NOT NULL DEFAULT ');
                if(item.className.indexOf('int') !== -1){
                    this.sqlStatement += '0,\n'
                }else if(item.className.indexOf('varchar') !== -1){
                    this.sqlStatement += '\'\',\n'
                }else if(item.className === 'TIMESTAMP' || item.className === 'timestamp'){
                    this.sqlStatement += 'CURRENT_TIMESTAMP,\n'
                }
            });
            this.sqlStatement = this.sqlStatement.substring(0,this.sqlStatement.length - 2)
            this.sqlStatement += "\n);"
            this.sqlStatement += '\n';

            //创建注释信息
            this.sqlStatement += "COMMENT ON TABLE mz." + this.tableName + " IS '表注释';\n"
            this.finalList.forEach(item => {
                this.sqlStatement += "COMMENT ON COLUMN mz." + this.tableName + "." + item.fieldName + " IS '"+ item.comment + "';\n"
            })
            this.sqlStatement += "\n```\n"
        },

        //添加字段
        addField() {
            if(this.fieldName === '' || this.className === '' || this.comment === ''){
                return;
            }
            this.insertList.push({fieldName:this.fieldName,className:this.className,comment:this.comment})

            //清空输入框
            this.fieldName = ''
            this.className = ''
            this.comment = ''
            //刷新所有语句
            this.generateSQL();
        },
        //
        querySearch(queryString, cb){
            let list = this.defaultClass;
            // let temp =  queryString ? list.filter(this.createFilter(queryString)) : list;
            let temp =  queryString ? list.filter((e) => {return e.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0}) : list;
            cb(temp);

        }
    },
    watch:{
        sqlStatement(newValue){
            console.log("sql改变")
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: auto;
    text-align: left;
}
.addButton{
    margin-left: 20px;
}
.sqlStatement{
    width: 100%;
    height: 300px;
    font-size: 18px;
    margin-bottom: 100px;
}
.fieldTable{
    width: 100%;
    border:1px solid red;
}
.filedInfo{
    border: 1px solid #b79797;
}
.title{
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
}
.sql{
    width: 100%;
    height: 500px;
    overflow: scroll;
    margin-bottom: 50px;
}
.inline-input{
    width: 200px;
}
.propertyName{
    width: 60px;
    height: 30px;
    text-align: right;
    margin-right: 10px;
    font-weight: bold;
    padding-top: 3px;
}

.form{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
}
.item{
    margin-bottom: 30px;
    height: 30px;
    width: 400px;
    display: flex;
}
.input{
    font-size: 19px;
}
</style>