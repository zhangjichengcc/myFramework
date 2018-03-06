var Vue = require('vue');
var vm = new Vue({
    el: '#adaw',
    data: {
        adwa: 1
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})

module.exports = {
    template: require('../templates/index.html')
};