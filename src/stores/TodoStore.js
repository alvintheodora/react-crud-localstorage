import { EventEmitter } from 'events';//built-in form node js
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: "923343",
                text: "Go Shopping",
                complete: true
            },
            {
                id: "198234",
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

    deleteTodo(id){  
        this.todos = this.todos.filter(todo => {
            return todo.id !== id;
        });       

        this.emit('change');
    }

    completeTodo(id){  
        this.todos = this.todos.map(todo => {
            if( todo.id === id ){
                todo.complete = true;
            }
            return todo;
        });       

        this.emit('change');
    }

    reloadTodo(todos){       
        this.todos = todos;
        this.emit('change');
    }

    handleAction(action){
        switch(action.type){
            case 'CREATE_TO_DO': 
                this.createToDo(action.text);
                break;
            case 'DELETE_TO_DO': 
                this.deleteTodo(action.id);
                break;
            case 'RECEIVE_TO_DO': 
                this.reloadTodo(action.todos);
                break;
            case 'COMPLETE_TO_DO': 
                this.completeTodo(action.id);
                break;
            default: break;
        }
    }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
window.dispatcher = dispatcher;


dispatcher.register(todoStore.handleAction.bind(todoStore));


export default todoStore;