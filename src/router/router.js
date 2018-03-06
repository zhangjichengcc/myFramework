import index from './../index.vue'
import home from '../pages/home/home.vue'
import bar from '../pages/home/bar.vue'

export default [
    {
        path: '/',
        component: index,
    },
    {
        path: '/bar',
        component: bar,
        children: [{
            "path":'/bar/home',
            component: home
        }]
    },{
        path: '/home',
        component: home
    }
]

