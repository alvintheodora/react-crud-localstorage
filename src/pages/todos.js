import React, { Component } from 'react';
import Todo from '../components/todo';
import TodoStore from '../stores/TodoStore';
class Todos extends Component {  

    constructor(props){
        super(props);
        
        this.state = {
            todos: TodoStore.getAll()            
        }
    }

    componentWillMount(){
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()      
            });
        });
    }


  render() { 
    const TodoComponents = this.state.todos.map(todo => {
        return <Todo key={todo.id} {...todo}/>
    });       
    return (
    <div className="todos">
        <h2>Todos</h2>
        <ul>{TodoComponents}</ul>
     </div>
    );
  }
}

export default Todos;
