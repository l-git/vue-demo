
console.log('index')
console.log('webpack')
import 'babel-polyfill';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {routes} from './route/router-index'


  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  var n=0;
  router.beforeEach((to, from, next) => {
    // ...
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (false) {
          next({
            path: '/404'
          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
  })


import App from './components/App.vue'

var app = new Vue({
    el: '#app',
    template:'<App/>',
    components:{
        App
    },
    router

  })

