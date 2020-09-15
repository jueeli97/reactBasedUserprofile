import React from "react";

const Veiwsection = (props)=>{
  const style = {
    "marginRight" : "20px"
  };
    return(
        <div>
        <div className="card text-left">
          
          <div className="card-body">
            {props.children}
          </div>
          <div className = "card-footer">
          <button type = "button" className = "btn btn-outline-primary" style = {style}>READ MORE</button>
         <button type = "button" className = "btn btn-outline-danger">VIEW MORE</button>
          </div>
        </div>

         
        </div>
    )

}

export default Veiwsection;