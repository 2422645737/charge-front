import VueRouter from 'vue-router'
import MainContainer from "@/components/mainContainer";
import articlePanel from "@/components/articlePanel";
import musicPage from "@/components/musicPage";
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
                }
            ]
        }
    ]
})