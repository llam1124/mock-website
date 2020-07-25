import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'


Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home, },
  { path: '/career', name: 'Career', component: Career }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if (to.hash){
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
})

export default router
