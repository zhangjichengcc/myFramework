<template>
    <div class="home_container">
    	haha{{title}}
        我就是一个小组件
    </div>
</template>

<script>

var title = "dingyi"
export default {
    name: 'home',
    data: function(){
        return {
            title : title
        }
    },
    methods:{

    }

}
</script>