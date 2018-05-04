import React, { Component } from 'react';
import Todo from '../components/todo';
import TodoStore from '../stores/TodoStore';
import * as TodoAction from '../actions/TodoActions';

class Todos extends Component {  

    constructor(props){
        super(props);
        
        this.state = {
            todos: TodoStore.getAll()            
        }

        this.createTodo = this.createTodo.bind(this);  
        this.setTodos = this.setTodos.bind(this);     
    }

    componentWillMount(){
        TodoStore.on('change', this.setTodos);        
    }

    componentWillUnmount(){//to avoid memory leaks
        TodoStore.removeListener('change', this.setTodos);
    }

    setTodos(){
        this.setState({
            todos: TodoStore.getAll()      
        });
    }

    createTodo(){
        TodoAction.createTodo(this.input.value);
        this.input.value='';
    }

    deleteTodo(id){
        TodoAction.deleteTodo(id); 
    }

    reloadTodo(){
        TodoAction.reloadTodo(); 
    }


  render() { 
    const TodoComponents = this.state.todos.map(todo => {
        return <Todo key={todo.id} onDelete={this.deleteTodo} {...todo}/>
    });       
    return (
    <div className="todos">
        <h2>Todos</h2>
        <input type="text" ref={input => this.input = input}/> <button onClick={this.createTodo}>Create!</button>
        <button onClick={this.reloadTodo}>Reload!</button>
        <ul>{TodoComponents}</ul>
     </div>
    );
  }
}

export default Todos;
