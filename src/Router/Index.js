import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import login from '@/view/login'
import List from '@/view/List'
import ProductDetail from '@/view/ProductDetail'
import Cart from '@/components/Cart'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Index',
            component:Index,
        },
        {
            path:'/login',
            name:'login',
            component:login,
        },
        {
            path:'/List',
            name:'List',
            component:List,
        },
        {
            path:'/product',
            name:'ProductDetail',
            component:ProductDetail,
        },
        {
            path:'/product/:id',
            name:'ProductDetail',
            component:ProductDetail,
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart,
        },

    ]
}) 