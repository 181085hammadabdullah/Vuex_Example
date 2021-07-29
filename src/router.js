import Vue from 'vue'
import Router from 'vue-router'
import ShowTodo from './Pages/ShowTodo.vue'
import AddTodo from './Pages/AddTodo.vue'
import EditTodo from './Pages/EditTodo.vue'
Vue.use(Router)

export default new Router({
    routes: [{

            path: '/',
            name: 'ShowTodo',
            component: ShowTodo
        },
        {

            path: '/ShowTodo',
            name: 'ShowTodo',
            component: ShowTodo
        },
        {

            path: '/AddTodo',
            name: 'AddTodo',
            component: AddTodo
        },
        {

            path: '/EditTodo/:id',
            name: 'EditTodo',
            component: EditTodo
        },
    ]
})