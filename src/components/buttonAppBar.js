import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { crudSessionStorage, todoListWithFlux, reactRedux } from './tileData';

import { Link, withRouter } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },

  link: {
      textDecoration: 'none'
  }
};
  

class ButtonAppBar extends React.Component {
  
    constructor(props){
        super(props);

        this.state = {
            left: false,
            title: 'React-App'
        };

    }


  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  setTitle = (title) => () => {
    this.setState({
      title: title
    });
  }
   
  
  render(){
    const { classes } = this.props;
 
    const sideList = (
        <div className={classes.list}>
          <Link to={`${process.env.PUBLIC_URL}/`} className={classes.link}><List onClick={this.setTitle('CRUD Using sessionStorage')}>{crudSessionStorage}</List></Link>
          <Divider />
          <Link to={`${process.env.PUBLIC_URL}/todo`} className={classes.link}><List onClick={this.setTitle('To-Do List with Flux')}>{todoListWithFlux}</List></Link>          
          <Divider />
          <Link to={`${process.env.PUBLIC_URL}/react-redux`} className={classes.link}><List onClick={this.setTitle('Simple Data Fetching with React-Redux')}>{reactRedux}</List></Link>
   
        </div>
      );

    return (
        <div className="AppBarDrawer">
          <AppBar position="static">
              <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                  <MenuIcon />
              </IconButton>                
              <Typography variant="title" color="inherit" className={classes.flex}>
                  {this.state.title}
              </Typography>          
              </Toolbar>
          </AppBar>
          
          
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </SwipeableDrawer>
        
        </div>
    );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonAppBar));





