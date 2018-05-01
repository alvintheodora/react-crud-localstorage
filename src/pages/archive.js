import React, { Component } from 'react';

class Archive extends Component {

  

  render() {      
    // console.log(this.props.match);
   const { match } = this.props;
    const { params } = match;
    return (
     <h2>Archives {params.article}</h2>
    );
  }
}

export default Archive;
