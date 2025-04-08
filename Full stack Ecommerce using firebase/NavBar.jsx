import "../pages/ButtonsStyle.css";
import Img from "../assets/cart.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Home from "./Home";
function Login({onLogin, isSignup, SetHead}){
    const navigate = useNavigate();
    function HandleLogin(e){
        e.preventDefault();
       if(Loginvalidatio()){
            alert("Login Successfully")
            onLogin();
            navigate("/home");
        } else {
            alert("Login Failed")
            navigate("/")
        }
        
    }
 const HandlesigupClick = (e)=>{
    e.preventDefault();
    if(SignupValidation()){
       
        alert("Signup Successfully")
        onLogin();
        navigate("/home")
    }
    else{
        alert("Signup Failed")
        navigate("/signup")
    }
    
 }
    const emailref = useRef();
    const passref = useRef();
    const nameref = useRef();



 function Loginvalidatio(){
    const email = emailref.current.value;
    const password = passref.current.value;
   // const name = nameref.current.value;
    if(!email || !password ){
        alert("Please fill all the fields")
        return false;
    }
    if(!email.includes("@")){
        alert("Please enter a valid email must include @")
        return false;
    }
    if(password.length < 6 || password == 12345678){
        alert("Password should be at least 6 characters")
        return false;
    }
    
    return true;
   

 }

 function SignupValidation(){
    const email = emailref.current.value;
    const password = passref.current.value;
    const name = nameref.current.value;
    if(!email || !password || !name ){
        alert("Please fill all the fields")
        return false;
    }
    if(!email.includes("@")){
        alert("Please enter a valid email must include @")
        return false;
    }
    if(password.length < 6 || password == 12345678){
        alert("Password should be at least 6 characters")
        return false;
    }
    if(name.length < 3){
        alert("Name should be at least 3 characters")
        return false;
    }
    if(name.length > 20){
        alert("Name should be less than 20 characters")
        return false;
    }
    if(!isNaN(name)){
        alert("Name should not be a number")
        return false;
    }
    if(!isNaN(email)){
        alert("Email should not be a number")
        return false;
    }
    if(!isNaN(password)){
        alert("Password should not be a number")
        return false;
    }
    if(email.includes(" ")){
        alert("Email should not contain space")
        return false;
    }
    if(password.includes(" ")){
        alert("Password should not contain space")
        return false;
    }
    if(name.includes(" ")){
        alert("Name should not contain space")
        return false;
    }
    return true;
 }

  
    return(
        <>
         <div className="pg">
         
         <div className="main">
          
            <div className="leftside">
                   <img src={Img} alt="BgImg" className="l" 
                   />
                
            </div>
            <div className="rightside">
            <h2 className="head">{SetHead}</h2>
            {isSignup ? (
                <form className="loginForm">
                <label className="l">Name</label>
                <input type="name" 
                  ref={nameref}
                placeholder="Enter Your Full Name" required/>
                <label className="l">Email:</label>
                <input type="email" 
                    ref={emailref}
                placeholder="Enter your email" required/>
                <label className="l">Password:</label>
                <input type="password"
                ref={passref}
                placeholder="Enter your password" required/>
                <button type="submit" className="btn" onClick={HandlesigupClick}>SignUp</button>
                

            </form>
               
                

        
            ):(
                <form className="loginForm">
                <label className="l">Email:</label>
                <input type="email" 
                  ref={emailref}
                placeholder="Enter your email" required/>
                <label className="l">Password:</label>
                <input type="password" ref={passref}  placeholder="Enter your password" required/>
                <button type="submit" className="btn" onClick={HandleLogin}>Login</button>
                <Link className="linkkk" to="/signup">Don't have an Account <span className="san">Register</span></Link>
                </form>
            )}
            </div>
         </div>
         </div>
        </>
    )
}
export default Login;

