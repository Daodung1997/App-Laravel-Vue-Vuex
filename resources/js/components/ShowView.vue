<template>
<div>
    <div class="row m-2">
        <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold pull-right">Phân Loại:</label>
        <div class="col-sm-3">
            <select class="form-control form-control-sm" @change="getListByStatus" v-model="status" id="status">
                <option disable value="All">--TẤT CẢ--</option>
                <option>ACTIVE</option>
                <option>DONE</option>
                <option>DELETED</option>
            </select>
        </div>
        <div class="col-sm-4">
            <router-link to="/todos/create"><button class="btn-primary btn-sm">Thêm công việc</button></router-link>
        </div>

    </div>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Tên công việc</th>
                <th>Ghi chú</th>
                <th>Trạng thái</th>
                <th>Chi Tiết</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(todo,index) in todos" :key="index">
                <td>
                    {{todo.title}}
                </td>
                <td>{{todo.description}}</td>
                <td> {{todo.status}}</td>
                <td class="text-center">
                    <button class=" btn-danger btn-sm" @click="deleteTodo(todo.id)">Xóa</button>
                    <router-link :to="{name:'edit', params:{id:todo.id}}"><button class="btn-primary btn-sm">Sửa </button></router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            status: "All"
        }
    },
    created() {
        this.getList();
    },
    computed: {
        todos() {
            let todos = this.$store.getters['todo/todos'];
            return todos
        }
    },
    methods: {
        getList() {
            this.$store.dispatch('todo/getTodos');
        },
        getListByStatus() {
                this.$store.dispatch('todo/showTodoByStatus', {
                    status: this.status
                }).then(res => {
                    this.$store.commit('todo/GET_TODOS', res.data.data);

                })
           
        },
        deleteTodo(id) {
            swal({
                title: 'Ban that su muon xoa chu',
                icon: 'warning',
                buttons: {
                    confirm: true,
                    cancel: true
                },
                dangerMode: true
            }).then((willDelete) => {
                if (willDelete) {
                    this.$store.dispatch('todo/deleteTodo', {
                        id: id
                    }).then(res => {
                        if (res.data.code == 200) {
                             this.getList();
                            swal({
                                title: "Delete Todo Successfuly",
                                icon: "success"
                            })
                           
                        } else {
                            swal({
                                title: "error",
                                icon: "warning"
                            })
                        }
                    })
                }
            })
        }
    }
}
</script>
