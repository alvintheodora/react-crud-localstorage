import React, { Component } from 'react';

class Todo extends Component {  

  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  deleteTodo(){
    this.props.onDelete(this.props.id);
  }


  render() {
    const { text,complete } = this.props;        
    return (
     <li>
         {text + " | status: " } {complete?'completed':'waiting'} <button onClick={this.deleteTodo}>Delete</button>
     </li>
    );
  }
}

export default Todo;
