import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions/userAction';
import { getErvillUsers } from '../actions/ervillAction';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Avatar } from 'material-ui';
import avatarImage from '../avatar.jpg';

const styles = theme => ({
    root: {     
      margin: theme.spacing.unit,   
      backgroundColor: theme.palette.background.paper,
    },
    center: {
        textAlign: 'center'
    }
  });
  

function mapStateToProps(state) {
    return {
        user: state.user.name,
        ervill: state.ervill.users
    };
  }

class ReactRedux extends Component {    

    constructor(props){
        super(props);

        this.fetchErvillUsers = this.fetchErvillUsers.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(setName('Alvin Theodora'));        
    }

    fetchErvillUsers(){
        this.props.dispatch(getErvillUsers());
    }

  render() {    
      const { user, ervill, classes } = this.props;   
      
      const ervillElement = ervill===undefined?(       
        <div> 
            <br/>
            <Button size="small" variant="raised" color="primary" onClick={this.fetchErvillUsers}>Fetch</Button>         
        </div>    
      ) : (
        <div className={classes.root}>
            <Typography variant="title" color="inherit">
                List of Users
            </Typography>
            <List component="nav">
            {
                ervill.map((user) => {
                    return (
                        <ListItem button key={user.id} className={classes.center}>
                             <Avatar alt="Remy Sharp" src={avatarImage} />
                            <ListItemText inset primary={user.full_name}  />
                        </ListItem>
                    )
                })
          
            }
            </List>
       </div>
      ) 
    return (
        <div className="react-redux">
            <h2>React Redux</h2>
            <div><code>F12 -> console, to see redux log</code></div>
            <br/>
            <div>Name: {user}</div>
            <br/>
            <span>Fetch data from <a href="https://my-json-server.typicode.com/alvintheodora/react-crud-localstorage/data">https://my-json-server.typicode.com/alvintheodora/react-crud-localstorage/data</a></span>
            <br/>
            { ervillElement }  
           
        </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ReactRedux));
