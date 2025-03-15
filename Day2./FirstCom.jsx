import React from "react";

// Props wrok like the objects in JavaScript 
// They are used to give / transfer data from one componet to other
// . Nottaion is used to access the data 
// here in grertReact component we are passing prps of name 
// {} are used to access the properties of props
function GreetReact(props)
{
    
     return (
              <h1>HELLO ,{props.name} <br /> KSY HEIN AP :</h1>
     );
}

export default GreetReact;