<template>

<div>

<div class="bb">
this is content
</div>
<div>{{aa}}</div>


<O />

    </div>

</template>

<script>
import O from './O.vue'

export default {

    data(){
        return {
            aa:'aaa'
        }
    },
    components:{
        O
    }

}

</script>


<style scoped>
.bb {
    background-color: #00f;
}
</style>