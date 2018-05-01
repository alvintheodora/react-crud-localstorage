import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Archive from '../pages/archive';
import Header from './header';
import Footer from './footer';
import App from '../App';
import Todo from '../pages/todos';
import Favorite from '../pages/favorite';
import Setting from '../pages/setting';



const User = () => {    
    return (
    <div className="user">
      <h2>User</h2>
    </div>
  )}


class Layout extends Component {

  
 

  render() {      
//    console.log(this.props.match);
    return (
      
      <div className="App">
        <Header/>

        <Switch>           
            <Route path={`${this.props.match.path}todo`} component={Todo}/>  
            <Route path={`${this.props.match.path}favorite`} component={Favorite}/>                   
            <Route path={`${this.props.match.path}setting`} component={Setting}/>
            
            <Route path={`${this.props.match.path}user`} component={User}/>
            <Route path={`${this.props.match.path}archive/:article?`} component={Archive}/>
            <Route component={ App }/>                     
        </Switch>   
      
  
        <Footer/>
      </div>
    );
  }
}

export default Layout;
