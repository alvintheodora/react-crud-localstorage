import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Archive from '../pages/archive';
import Header from './header';
import Footer from './footer';
import App from '../App';
import Todo from '../pages/todos';
import ReactRedux from '../pages/reactRedux';
// import '../client';
// import Favorite from '../pages/favorite';
// import Setting from '../pages/setting';



// const User = () => {    
//     return (
//     <div className="user">
//       <h2>User</h2>
//     </div>
//   )}


class Layout extends Component {

  render() {      
  
    return (
      
      <div className="App">
        <Router>
          <div>
            <Header/>
            
            <Switch>           
                <Route path={`${process.env.PUBLIC_URL}/todo`} component={Todo}/>  
                {/* <Route path={`${process.env.PUBLIC_URL}/favorite`} component={Favorite}/>                   
                <Route path={`${process.env.PUBLIC_URL}/setting`} component={Setting}/>
                
                <Route path={`${process.env.PUBLIC_URL}/user`} component={User}/> */}
                <Route path={`${process.env.PUBLIC_URL}/params/:article?`} component={Archive}/>
                <Route path={`${process.env.PUBLIC_URL}/react-redux`} component={ReactRedux}/>
                <Route component={ App }/>                     
            </Switch>   
          

            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default Layout;