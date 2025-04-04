import { useState , useRef } from "react";
import './../src/App.css'

function App(){
  const [result , setResult ] = useState("");
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
   
  
 function add(e){
  e.preventDefault;
  const num1 = parseInt(inputOne.current.value);
  const num2 = parseInt(inputTwo.current.value);
  setResult(num1+num2)
 }

 function sub(e){
  e.preventDefault;
  const num1 = parseInt(inputOne.current.value);
  const num2 = parseInt(inputTwo.current.value);
  setResult(num1-num2)
  }

  function mul(e){
    e.preventDefault;
    const num1 = parseInt(inputOne.current.value);
  const num2 = parseInt(inputTwo.current.value);
    setResult(num1*num2)
  }

  function div(e){
    e.preventDefault;
    const num1 = parseInt(inputOne.current.value);
  const num2 = parseInt(inputTwo.current.value);
    setResult(num1/num2)
  }
  function clear(e){
    e.preventDefault;
    setResult("")
  }
  function reset(e){
    e.preventDefault;
    inputOne.current.value = "";
    inputTwo.current.value = "";
  }
  return(
    <>
    <h1 className="a">Wellcome to My Calculator</h1>
    <div className="main">
    <div className="res">
      <h2 className="result">Result: {result}</h2>
    </div>
    <div className="inp">
    <input type="number" ref={inputOne} 
     placeholder="Enter first number"
    className="input" />
    <input type="number" 
    placeholder="Enter second number"
    ref={inputTwo} className="input" />
    </div>
    <div className="bt">
      <button className="btn"
      onClick={add}
      >+</button>
      <button className="btn"
       onClick={sub}
      >-</button>
      <button className="btn"
       onClick={mul}
      >*</button>
      <button className="btn"
      onClick={div}
      >/</button>
       <button className="btn"
        onClick={clear}
      >Clear</button>
      <button className="btn"
      onClick={reset}
      >Reset</button>
    </div>
    </div>
    </>
  )
}
export default App;
