var Vue = require('vue');
var home = new Vue({
    el: '.home_container',
    data: {
        title: '这是title'
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})

module.exports = {
    template: require('../pages/home/home.vue')
};