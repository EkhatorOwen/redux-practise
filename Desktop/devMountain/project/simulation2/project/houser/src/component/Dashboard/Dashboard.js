import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House'

 class Dashboard extends Component {
     constructor(){
         super();
         this.state ={
             houses: []
         }
         this.getHouses = this.getHouses.bind(this)   
         this.deleteHouse= this.deleteHouse.bind(this)
     }

     componentDidMount(){
         this.getHouses();
     }

     getHouses(){
        axios.get('http://localhost:3001/api/getHouses')
             .then(res=>{
                 
                 this.setState({houses: res.data})
             })
             .catch(console.log)
     }

     deleteHouse(id){
        axios.delete(`http://localhost:3001/api/deleteHouse/${id}`)
              .then(res=>{
                this.getHouses()    
                // console.log(this); 
              })
              .catch(console.log)
     }

  render() {
        const houses = this.state.houses.map((element, index)=>
       // console.log(element)
        (<House key={index}
                house={element}
                deleteHouse={this.deleteHouse}   
            />  
        ))

    return (
      <div className="Dashboard">
        <div className="col col-1">
        
        </div>

        <div className="col dashboard_content">

            <div className="content_header">
               
                <h1 className="heading">Dashboard</h1>
              
               <Link to="/wizard/step1"> <button className="add_button"> Add New Property</button></Link>
   
            </div>
            
            { houses }

          </div>
        <div className="col col-2">
        
        </div>
      </div>
    )
  }
}

export default Dashboard;
