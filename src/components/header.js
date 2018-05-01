import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {  

constructor(props){
    super(props);

    this.navigate = this.navigate.bind(this);
    }

navigate(){
    this.props.history.push('/abc')
    }
  render() {      
    //console.log(this.props.match.url);
    return (
        <div>
        <h2>Headers</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/homeChild">Home Child</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/archive/1">Archive</Link></li>
            <button onClick={this.navigate}>button to home</button>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/setting">Setting</Link></li>
        </ul>

            <hr/>
        </div>
    );
  }
}

export default withRouter(Header);
