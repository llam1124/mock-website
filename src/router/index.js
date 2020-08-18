import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'
import About from '../components/About.vue'
import Service from '../components/Service.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home ,
    children: [
      { path: '/#about', name: 'About', component: About },
      { path: '/#service', name: 'Service', component: Service },
      { path: '/#contact', name: 'Contact', component: Contact }
    ]},
  { path: '/career', name: 'Career', component: Career },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, from, savedPosition){
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    else{
      return {x: 0, y: 0}
    }
  }
})

export default router
