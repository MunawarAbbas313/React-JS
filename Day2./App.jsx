
import './App.css'
import GreetReact from './FirstCom'

// Creating a Functional Componet :
// Name should be Starting with a Capital word 


// In default React App only the app component is Renderd 
function App() {
   // Here inside the funciton we are writing JS and HTML known as JSX
   // here name is not a variable its a prop 
  return<>
  
    <GreetReact name = "Munawar Abbas" />
  </>
   
  
}

export default App
