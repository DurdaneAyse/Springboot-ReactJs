import React, { Component } from 'react'
 
class HeaderComponent extends Component {
 constructor(props){
   super(props)
   this.state={

   }
 }
  render() {
    return (
     <div>
      <header>
      <nav className="navbar " style={{display: "flex", alignContent: "center"}}>
                <a className="navbar-brand" style={{marginLeft:'40px', color:'black', padding: "0 30px"}}> Student Information System</a>
            </nav>
       </header>
       </div>
    )
  }
}
export default HeaderComponent
