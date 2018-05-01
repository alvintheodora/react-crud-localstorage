import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import Layout from './components/layout';




ReactDOM.render(
    <Router>    
        <div>
            
          <Route path="/" component={Layout}/>           
                  
        
      
         
        </div> 
      </Router>
      
      
, document.getElementById('root'));
registerServiceWorker();
