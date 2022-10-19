const app = Vue.createApp({
    data() {
        return{
            todoList: [],
            todo: '',
            visibility: true
        };
    },
    computed: {
        buttonCaption(){
            return this.visibility ? 'Hide' : 'Show';
        }
    },
    methods:{
        addTodo(){
            this.todoList.push(this.todo);
        },
        toggleVisibility(){
            this.visibility = !this.visibility;
        }
    }
});

app.mount('#assignment');