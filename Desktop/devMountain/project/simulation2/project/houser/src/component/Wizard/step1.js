import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


 class Wizard extends Component {

  constructor(){
    super();

    this.state={
      name : '',
      address : '',
      city : '',
      state: '',
      zipcode : ''
    }

    this.nameonChange = this.nameonChange.bind(this);
    this.addressonChange = this.addressonChange.bind(this);
    this.cityonChange = this.cityonChange.bind(this);
    this.stateonChange = this.stateonChange.bind(this);
    this.ziponChange = this.ziponChange.bind(this);
    this.submitHouses = this.submitHouses.bind(this);
  }

  nameonChange(e){
    this.setState({name: e.target.value })
  }
  addressonChange(e){
    this.setState({address: e.target.value })
  }
  cityonChange(e){
    this.setState({city: e.target.value })
  }
  stateonChange(e){
    this.setState({state: e.target.value })
  }
  ziponChange(e){
    this.setState({zipcode: e.target.value })
  }

  submitHouses(){
    let houses = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zipcode
    }
   axios.post('http://localhost:3001/api/sendHouses',{houses})
         .then(res=> console.log(res))
}
  
  render() {
    return (
      
      <div className="wiz_iniput_container">
           
            <div className="wiz_input">
            <label>Propery Name</label>
            <input onChange={this.nameonChange}/>
            </div>

            <div className="wiz_input">
            <label>Address</label>
            <input onChange={this.addressonChange}/>
            </div>

            <div className="wiz_input">
            <label>City</label>
            <input onChange={this.cityonChange}/>
            </div>

            <div className="wiz_input">
            <label>State</label>
            <input onChange={this.stateonChange}/>
            </div>

            <div className="wiz_input">
            <label>Zip</label>
            <input onChange={this.ziponChange}/>
            </div> 
            <div >
            <Link to="/wizard/step2"><button >Next Step</button> </Link>
            </div> 
            
          
            </div>
        
    )
  }
}

export default Wizard;
