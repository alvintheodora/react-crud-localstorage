import React, { Component } from 'react';

class Archive extends Component {

  

  render() {      
     
   const { match } = this.props;
    const { params } = match;
    return (
     <h2>Router Params: {params.article}</h2>
    );
  }
}

export default Archive;
