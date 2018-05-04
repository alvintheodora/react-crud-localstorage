import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {  

constructor(props){
    super(props);

    this.navigate = this.navigate.bind(this);
    }

navigate(){
    this.props.history.push(process.env.PUBLIC_URL+'/abc')
    }
  render() {      
    
    return (
        <div>
        <h2>Header</h2>
        <ul>
            <li><Link to={`${process.env.PUBLIC_URL}/`}>CRUD (sessionStorage)</Link></li>         
            <li><Link to={`${process.env.PUBLIC_URL}/todo`}>To-Do List with Flux</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/react-redux`}>React Redux</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/params/1`}>Router Params</Link></li>
            <button onClick={this.navigate}>history.push /abc</button>
            
            {/* <li><Link to={`${process.env.PUBLIC_URL}/favorite`}>Favorite</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/setting`}>Setting</Link></li> */}
        </ul>

            <hr/>
        </div>
    );
  }
}

export default withRouter(Header);
