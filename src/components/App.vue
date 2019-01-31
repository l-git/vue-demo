
<template>

<div>
    <!-- <Header />
<Content />
 <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
 <router-view></router-view>
    </div>

</template>





<script>
import Header from './Header.vue'
import Content from './Content.vue'




import Hello from '@/js/hello.js'

console.log(Hello)


export default {
    name:'App',
    data(){
        return {

        }
    },
    	components: {
        Header,
        Content,
    },

}

</script>

<style>
.a {
    background-color:#f00;
}

</style>

