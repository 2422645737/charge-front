import VueRouter from 'vue-router'
import MainContainer from "@/components/mainContainer";
import articlePanel from "@/components/articlePanel";
import musicPage from "@/components/musicPage";
import toolPage from "@/components/toolPage";
export default new VueRouter({
    routes:[
        {
            path:'/',
            component: MainContainer,
            name: '',
            children:[
                {
                    path:'blog',
                    component:articlePanel
                },
                {
                    path:'music',
                    component:musicPage
                },
                {
                    path:'tool',
                    component:toolPage
                },
            ]
        }
    ]
})