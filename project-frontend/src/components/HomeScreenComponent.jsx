import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class HomeScreenComponent extends Component {

 constructor(props){
   super(props)
   this.state={

   }
 }

  
  
  render() {
    return (
     //<div className="container">
        <div style={{width: "100%", display: "flex"}}>
            <div style={{width: "50%", float: "left", border: "1px solid #ccc"}}>
              <div className='foto'></div>
            </div>
            <div style={{width: "50%", float: "right", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center"}}>
              <div style={{color: "#4a443c", padding: "20px 0", fontSize: "large"}}>Student Information System</div>
              <NavLink className="btn btn-warning" style={{width: "300px", color: "black", marginBottom: "10px", height:"45px"}} to={"/add-student"}>Add Student</NavLink>
              <NavLink className="btn btn-warning" style={{width: "300px", color: "black" , height:"45px"}} to={"/students"}>All Student</NavLink>
            </div>
        </div>
       //</div>
    )
  }
}
export default HomeScreenComponent
