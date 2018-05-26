import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


 class Wizard extends Component {

  constructor(){
    super();

    this.state={
      mortgage : '',
      rent : '',
      
    }

    this.rentonChange = this.rentonChange.bind(this);
    this.mortgageonChange = this.mortgageonChange.bind(this);

  }

  rentonChange(e){
    this.setState({rent: e.target.value })
  }
  mortgageonChange(e){
    this.setState({mortgage: e.target.value })
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
         .catch(err=> console.log)
}
  
  render() {
    return (
       

       <div className="wiz_iniput_container">

            <div className="wiz_input">
            <label>Monthly Mortgage Amount</label>
            <input onChange={this.mortgageonChange}/>
            </div>

            <div className="wiz_input">
            <label>Desired Monthly Rent</label>
            <input onChange={this.rentonChange}/>
            </div>

            <div >
            <button onClick={ this.submitHouses }>Complete</button>
            </div> 

            <div>
            <Link to="/wizard/step2"> <button>Previous Step</button></Link>
             </div>
  
        </div>
        
    )
  }
}

export default Wizard;
