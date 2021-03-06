export default {
    getTodos({ commit }) {
        var url = "api/todos"
        axios.get(url).then(res => {
            if (res.status == 200) {
                commit('GET_TODOS', res.data.data);
            } else {
                console.log('Error')
            }

        }).catch(err => {
            console.log(err)
        })
    },
    addTodo({ commit, dispatch }, payload) {
        let result = axios.post('api/todos', payload).then(res => {
            return res
        })
        return result
    },
    getTodo({ commit }, payload) {
        let result = axios.get('api/todos/' + payload.id + "/edit").then(res => {
            commit('GET_EDIT', res.data);
            return res;
        })
        return result;
    },
    editTodo({ commit, dispatch }, payload) {
        let result = axios.put('api/todos/' + payload.id, payload).then(res => {
            console.log(res);
            return res
        })
        return result
    },
    deleteTodo({ commit, dispatch }, payload) {
        let result = axios.delete('api/todos/' + payload.id).then(res => {
            return res
        })
        return result
    },
    showTodoByStatus({ commit }, payload) {
        let result = axios.get('api/list-by-status/' + payload.status).then(res => {
            console.log(res);
            return res
        })
        return result;
    }
}