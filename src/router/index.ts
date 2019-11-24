import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CourseListView from '../CourseFeatures/View/CourseListView.vue'
import RecetteListView from '../CourseFeatures/View/RecetteListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'CourseList',
    component: CourseListView
},{
  path: '/recette',
  name: 'Recette',
  component: RecetteListView
},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
