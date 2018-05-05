import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import classNames from 'classnames';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  buttonblue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Todo extends Component {  

  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);

  }

  deleteTodo(){
    this.props.onDelete(this.props.id);
  }

  completeTodo(){
    this.props.onComplete(this.props.id);
  }


  render() {
    const { text,complete,classes } = this.props;        
    return (
     <li>
         {text + " | status: " } {complete?'completed':'waiting'}
         <Button size="small" className={classes.button} variant="raised" color="secondary" onClick={this.deleteTodo}>
         <Delete className={classNames(classes.leftIcon, classes.iconSmall)} />
          Delete
        
        </Button>
        <Button size="small" className={classes.buttonblue} variant="raised" color="secondary" onClick={this.completeTodo}>
        <Done className={classNames(classes.leftIcon, classes.iconSmall)} />
          Complete
          
        </Button>
             
     </li>
   
    );
  }
}

export default withStyles(styles)(Todo);
