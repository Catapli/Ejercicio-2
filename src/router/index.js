import Vue from 'vue'
import VueRouter from 'vue-router'
import AppForm from '../views/AppForm.vue'
import AppTable from '../views/AppTable.vue'
import AboutUs from '../views/AboutUs.vue'
import AppNotFound from '../components/AppNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tabla',
    component: AppTable
  },
  {
    path: '/form',
    name: 'Form',
    component: AppForm
  },
  {
    path: '/form/:id',
    name: 'Edit',
    component: AppForm,
    props:true
  },
  {
    path: '/aboutUs',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/not-found',
    name: '404',
    component: AppNotFound,
  },
  {
    path: '*',
    redirect: {
      name: '404',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router