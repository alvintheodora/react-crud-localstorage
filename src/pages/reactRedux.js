import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions/userAction';
import { getErvillUsers } from '../actions/ervillAction';

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
      const { user, ervill } = this.props;   
      
      const ervillElement = ervill===undefined?(       
        <div> 
            <br/>
            <button onClick={this.fetchErvillUsers}>Fetch</button>  
        </div>    
      ) : (
        <ul>
            {
                ervill.map((user) => {
                    return <li key={user.id}>{user.full_name}</li>
                })
          
            }
        </ul>
      ) 
    return (
        <div>
            <h2>React Redux</h2>
            <div><code>F12 -> console, to see redux log</code></div>
            <br/>
            <div>Name: {user}</div>
            <br/>
            <span>Fetch data from <a href="http://rev-ervill.esy.es/api/users">http://rev-ervill.esy.es/api/users</a></span>
            { ervillElement }  
           
        </div>
    );
  }
}

export default connect(mapStateToProps)(ReactRedux);
