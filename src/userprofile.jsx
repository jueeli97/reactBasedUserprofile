import React from "react";


const Userprofile = (props)=>{

    let {url,name,profile} = props
   return(  
  <div className ="row" >
    <div className = "col-md-3" >
    <img src = {url} alt = "human" />
    </div> 
    <div className = "col-md-3" >
    <button type = "button" className = "btn btn-danger btn-md">{name}</button>
    </div>

    <div className ="col-md-12">
    <h2>{profile}</h2>
    </div>
    
 </div>
 
   )
}

export default Userprofile;