import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path:"page",
      name:"page",
      component:()=>import("../views/page/Page.vue")
    },{
      path:"my",
      name:"my",
      component:()=>import("../views/my/My.vue")
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
