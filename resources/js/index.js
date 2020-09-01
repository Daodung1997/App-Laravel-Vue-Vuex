import Create from './components/CreateTodo'
import Edit from './components/EditTodo'
import ShowView from './components/ShowView'
import Loading from './components/Loading'
export const routes = [
    { path: '/', name: 'todo', component: ShowView },
    { path: '/todos/create', name: 'create', component: Create },
    { path: '/todos/edit/:id', name: 'edit', component: Edit },
    { path: '/loading', name: 'loading', component: Loading },
]