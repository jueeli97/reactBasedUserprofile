import React from "react";
import Faker from "faker";
import Userprofile from "./userprofile";
import Viewsection from "./viewsection";

const App = ()=>{
    
    return(
        <div className = "container" style = {{"marginTop": "20px"}} >
        <Viewsection>
   <Userprofile  name = "JOHN DOE" profile = "WEB DEVELOPER" url ={Faker.image.avatar()}/>
   </Viewsection>

   <Viewsection>
   <Userprofile name = "EMMA DOE" profile = "BACKEND DEVELOPER" url = {Faker.image.avatar()}/>
   </Viewsection>

   <Viewsection>
   <Userprofile name = "MAK DOE" profile = "TESTER" url = {Faker.image.avatar()}/>
   </Viewsection>
   </div>
   
    )};

export default App ;



