import React from 'react'

 const house = (props) => {
  return (
   <div className="home_listing">
    
                <p>Property Name:</p> {props.house.name}
                <p>Address:</p>{props.house.address}
                <p>City:</p>{props.house.city}
                <p>State:</p>{props.house.state}
                <p>Zip:</p>{props.house.zip}
                <button onClick={()=>props.deleteHouse(props.house.id)} className="delete_button">Delete</button>
        </div>
  )
}


export default house;
