import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';
import githubLogo from '../githubLogo.png';


const styles = {

  footer: {
    backgroundColor: blueGrey[900],
    color: grey[500], 
  }, 
  small: {
    fontSize: 14
  },
  link: {
      textDecoration: 'none',
      color: grey[100],
  }
};

class Footer extends Component {  

  render() {      
    const { classes } = this.props;

    return (
 
      <div className = {classes.footer}>
    
      <Typography variant="caption" color="inherit" className={classes.small}>
          <p>Created by <a className={classes.link} href="https://www.linkedin.com/in/alvintheodora/">Alvin Theodora</a></p>
          <p>Source code available on <a href="https://github.com/alvintheodora/react-crud-localstorage"> <img src={githubLogo} alt="Github Logo"/></a></p>
      </Typography>   
    </div>
   
    );
  }
}

export default withStyles(styles)(Footer);
