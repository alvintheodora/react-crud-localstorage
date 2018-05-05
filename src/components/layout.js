import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Archive from '../pages/archive';
import Header from './header';
import App from '../App';
import Todo from '../pages/todos';
import ReactRedux from '../pages/reactRedux';
import Footer from './footer';
import { withStyles } from 'material-ui/styles';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
 
  },
  flex:{
    flex: 1,
  }
};

class Layout extends Component {

  render() {      
    const {classes} = this.props;
    return (
      
    
        <Router>
          <div className={`${classes.body} App`}>
            <Header/>
            <div className={classes.flex}>
              <Switch>           
                  <Route path={`${process.env.PUBLIC_URL}/todo`} component={Todo}/>  
                  {/* <Route path={`${process.env.PUBLIC_URL}/favorite`} component={Favorite}/>                   
                  <Route path={`${process.env.PUBLIC_URL}/setting`} component={Setting}/>
                  
                  <Route path={`${process.env.PUBLIC_URL}/user`} component={User}/> */}
                  <Route path={`${process.env.PUBLIC_URL}/params/:article?`} component={Archive}/>
                  <Route path={`${process.env.PUBLIC_URL}/react-redux`} component={ReactRedux}/>
                  <Route component={ App }/>                     
              </Switch>  
            </div> 
          
            <Footer/>
          </div>
        </Router>
   
    );
  }
}

export default withStyles(styles)(Layout);
