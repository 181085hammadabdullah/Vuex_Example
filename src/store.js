import Vue from 'vue'
import Vuex from 'vuex'
import Todo from "../src/apis/Todo";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Todos: [],
        todo: null
    },
    mutations: {
        SET_Todos: (state, todos) => {
            state.Todos = todos;
        },
        REMOVE_TODO: (state, todo) => {
            state.Todos = state.Todos.filter(item => {
                return item.id !== todo.id;
            })
        },
        AddTodo: (state, { product }) => {
            state.Todos.push({
                product,
            })
        },
        GetTodo: (state, todo) => {
            state.todo = todo;

        },
        Update_Todo: (state, todo) => {
            state.Todos.forEach(item => {
                if (item.id === todo.id) {
                    item.name = todo.name;
                    item.completed = todo.completed;
                }
            })

        }

    },
    actions: {
        getCartItems: ({ commit }) => {
            Todo.all().then(response => {
                commit('SET_Todos', response.data.Todos);
            })
        },
        removetodo: ({ commit }, product) => {

            commit('REMOVE_TODO', product);
            Todo.delete(product.id).then(response => {
                console.log(response);
            });
        },
        AddTodo: ({ commit }, todo) => {

            commit('AddTodo', { todo });
            Todo.store({
                name: todo.name,
            });

        },
        EditTodo: ({ commit }, todo) => {
            Todo.edit(todo).then(response => {
                commit('GetTodo', response.data.Todo);

            })
        },
        UpdateTodo: ({ commit }, todo) => {

            commit('Update_Todo', todo);
            Todo.Update(todo).then(response => {
                console.log(response);
            })
        },
    }
})