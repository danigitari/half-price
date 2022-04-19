import {createRouter ,createWebHistory } from 'vue-router'
import Cart from '../components/halfprice_cart'
import About from '../components/halfprice_about'
import Shop from '../components/halfprice_shop'
import Home from '../components/halfprice_home'
import Contact from '../components/halfprice_contact'
import Checkout from '../components/halfprice_checkout'
import Order from '../components/order-received'
const routes = [
    {
        path:'/halfprice_cart',
        name:'halfprice_cart',
        component:Cart

    },
    {
        path:'/',
        name:'halfprice_home',
        component:Home,
        props:true

    },
    {
        path:'/halfprice_shop',
        name:'halfprice_shop',
        component:Shop
    },
    {
        path:'/halfprice_about',
        name:'halfprice_about',
        component:About
    },

    {
        path:'/order-received',
        name:'order-received',
        component:Order
    },

    {
        path:'/halfprice_contact',
        name:'halfprice_contact',
        component:Contact
    },
    {
        path:'/halfprice_checkout',
        name:'halfprice_checkout',
        component:Checkout
    },
]
const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router