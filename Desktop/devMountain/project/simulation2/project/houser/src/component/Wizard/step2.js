import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


 class Wizard extends Component {

  constructor(){
    super();

    this.state={
      url : '',
    }

    this.imageurlonChange = this.imageurlonChange.bind(this);
  }

  imageurlonChange(e){
    this.setState({url: e.target.value })
  }

  
  render() {
    return (
     

      <div className="wiz_iniput_container">

            <div className="wiz_input">
            <label>Image Url</label>
            <input onChange={this.imageurlonChange}/>
            </div>

            <div>
           <Link to="/wizard/step3"> <button>Next Step</button></Link>
            </div>

            <div>
            <Link to="/wizard/step1"> <button>Previous Step</button></Link>
             </div>

     </div> 
    )
  }
}

export default Wizard;
