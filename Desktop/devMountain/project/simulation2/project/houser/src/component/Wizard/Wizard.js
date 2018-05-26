import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';
import step1 from './step1'
import step2 from './step2'
import step3 from './step3'



 class Wizard extends Component {

  

  
  render() {
    return (
      <div className="Dashboard">
      <div className="col col-1"></div>

      <div className="col dashboard_content">

          <div className="content_header">
             
              <h1 className="heading">Add New Listing</h1>
            
           <Link to="/"> <button className="add_button">Cancel</button></Link>
 
          </div>   

          <Switch>
          <Route exact path="/wizard/step1" component={step1} />
          <Route path="/wizard/step2" component={step2} />
          <Route path="/wizard/step3" component={step3} />
          </Switch>  
           
        </div>

       <div className="col col-2"></div>
      </div>
    )
  }
}

export default Wizard;
