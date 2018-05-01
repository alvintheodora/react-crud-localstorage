import React, { Component } from 'react';

class Todo extends Component {  

  render() {
    const { text,complete } = this.props;        
    return (
     <li>
         {text + " | status: " } {complete?'completed':'waiting'}
     </li>
    );
  }
}

export default Todo;
