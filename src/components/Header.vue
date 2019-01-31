<template>
    <div>
        <div>
            <ul>
                <li v-for="(item, index) in liList" v-bind:key="index">
                   {{item.name}}
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

export default {

    data(){
        return {
            liList:[
                {
                    name:'1'
                },
                {
                    name:'2'
                },
                {
                    name:'3'
                },
                {
                    name:'1'
                },
            ]
        }
    }

}

</script>

<style>

    ul {
        padding:0
    }

    li  {
        list-style-type: none;
        display: inline-block;
        width:25%;
        background-color: #f00;
        text-align: center;
        
    }

</style>

