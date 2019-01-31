
import Header from '@/components/Header.vue'
import Index from '@/components/Index.vue'
import Content from '@/components/Content.vue'
//import NotFound from '@/components/NotFound.vue'
import O from '@/components/O.vue'

//import LazyComp from '@/components/LazyComp.vue'
export const routes = [
    { 
        path: '/', 
        component: Index,
        children:[
            {
                path:'content',
                component:Content
            },
            {
                path:'o',
                component:O
            }
        ],
        meta: { requiresAuth: true }

    },
    { path: '/lazycomp', component: r => require.ensure([], () => r(require('@/components/LazyComp.vue'))) } ,
    { path: '*', component: () => import('@/components/NotFound.vue') } 
    //{ path: '*', component: () => import('./Foo.vue') }  //https://github.com/webpack/webpack/issues/8656 //webpack 4.29.0 bug does not support dynamic import lazy loading route
   
]

