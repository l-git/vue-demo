<template>

<div>

<ul>
<li @click="go('')">index</li>
<li @click="go('content')">content</li>
<li @click="go('o')">o</li>

<li @click="go('/redirect')">redirect</li>
<li @click="go('lazycomp')">LazyComp</li>
<li @click="go(this)">1</li>

</ul>
 <router-view></router-view>
    </div>


</template>




<script>

export default {

    data(){
        return {

        }
    },
    methods:{
        go(r){
            
            this.$router.push('/'+r)
        }
    }


}


</script>


<style>


</style>


