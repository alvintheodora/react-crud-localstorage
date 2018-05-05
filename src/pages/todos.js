import React, { Component } from 'react';
import Todo from '../components/todo';
import TodoStore from '../stores/TodoStore';
import * as TodoAction from '../actions/TodoActions';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Todos extends Component {  

    constructor(props){
        super(props);
        
        this.state = {
            todos: TodoStore.getAll(),
            name: ''         
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
        TodoAction.createTodo(this.state.name);
        this.setState({
            name: ''
        });
    }

    deleteTodo(id){
        TodoAction.deleteTodo(id); 
    }

    completeTodo(id){
        TodoAction.completeTodo(id); 
    }

    reloadTodo(){
        TodoAction.reloadTodo(); 
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };


  render() { 
    const { classes } = this.props;

    const TodoComponents = this.state.todos.map(todo => {
        return <Todo key={todo.id} onDelete={this.deleteTodo} onComplete={this.completeTodo} {...todo}/>
    });       
    return (
    <div className="todos">
        <h2>Flux</h2>

        <TextField
          id="name"
          label="Activity"        
          margin="normal"
          value={this.state.name}       
          onChange={this.handleChange('name')}  
        />

        <Button size="small" variant="raised" color="primary" className={classes.button} onClick={this.createTodo}>Create</Button>
        <Button size="small" variant="raised" color="default" className={classes.button} onClick={this.reloadTodo}>Reload</Button>

        <ul>{TodoComponents}</ul>
        
     </div>
    );
  }
}

export default withStyles(styles)(Todos);
