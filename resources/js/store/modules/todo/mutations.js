export default {
    GET_TODOS(state, payload) {
        state.todos = payload
    },
    GET_EDIT(state, payload) {
        state.todoEdit = payload
    }
}