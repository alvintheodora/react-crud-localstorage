import { EventEmitter } from 'events';//built-in form node js
class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 923343,
                text: "Go Shopping",
                complete: true
            },
            {
                id: 198234,
                text: "Pay Water Bills",
                complete: false
            }
        ]
    }

    getAll(){
        return this.todos;
    }

    createToDo(text){
        this.todos.push({
            id: Date.now(),
            text,
            complete: false            
        });

        this.emit('change');
    }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore;