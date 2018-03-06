<template>
    <div id="cvs">
        <div class="home_container">
            {{msg}}
            <h2>{{haha}}</h2>
            <router-link to="/bar/home">打开子组件{{$parent.title}}</router-link>

        </div>
        <div id="bar-app">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>


export default {
    name: 'bar',
    data: function(){
        return {
            msg : "数组极小lalala"
        }
    },
    methods:{

    },
    computed: {
        haha: function(){
            return this.$parent.title;
        }
    }
}
</script>