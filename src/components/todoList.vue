<template>
<!--    TODO清单-->
    <div class="main">
        <div class="list_header">
            <input class="list_input" v-model='nextTask'>
            <button class="submit_button" @click="submitTask()">添加</button>
        </div>

        <div class="taskContainer">
            <div class="taskItem" v-for="(item,index) in taskList" :key="index">
                <input class="checkbox" type="checkbox" name="options"/>
                <label class="content">{{item}}</label>
                <img class="delete_item_icon" src="../assets/删除.png" @click="deleteItem(index)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "todoList",
    data(){
        return {
            nextTask:'',
            taskList:['123','321','555','333','000']
        }
    },
    methods: {
        //添加代办任务
        submitTask() {
            if(this.nextTask !== ''){
                this.taskList.push(this.nextTask)

                this.nextTask = ''
            }

        },
        //删除任务列表
        deleteItem(index) {
            this.taskList.splice(index,1)
        }
    }
}
</script>

<style scoped>
.main{
    height: 300px;
    width: 500px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #dbe0ee;
    box-shadow:  1px 1px 1px #ffffff,
    -1px -1px 1px #ffffff;
}

.list_header{
    /*background-color: #ece2e2;*/
    width: 98%;
    height: 60px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/*输入框样式*/
.list_input{
    width: 70%;
    height: 73%;
    outline: none;
    border: blue solid 1px;
    border-right: none;
    border-radius: 4px 0 0 4px;
    font-size: 19px;
}
/*提交按钮样式*/
.submit_button{
    height: 80%;
    width: 70px;
    outline: none;
    border: blue solid 1px;
    border-radius: 0 4px 4px 0;
    border-left: none;
    font-size: 17px;
    transition-duration: 0.2s;
}

/*提交按钮样式-悬浮*/
.submit_button:hover{
    cursor: pointer;
    font-weight: bold;
    transition-duration: 0.2s;
    transition-timing-function: linear
}
/*任务列表*/
.taskContainer{
    /*overflow: auto;*/
    overflow-y: scroll;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
/*任务item*/
.taskItem{
    width: 90%;
    height: 40px;
    margin-top: 5px;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: left;
    border: #7979b7 solid 1px;
    border-radius: 3px;
    padding-right: 0px;
}
.content{
    width: 87%;
    height: 40px;
    text-align: left;
    font-size: 20px;
    display: flex;
    align-items: center;
}
/*复选框*/
.checkbox{
    width: 25px;
    height: 25px;
    margin-left: 7px;
    margin-right: 5px;
}
/*删除按钮图标*/
.delete_item_icon{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 5px;

}
.delete_item_icon:hover{
    cursor: pointer;

}
</style>