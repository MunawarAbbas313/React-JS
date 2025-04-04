import { useState } from "react";
import Home from './Home'
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Routes , Route } from "react-router-dom";

function App(){
  const [isLogin , setLogin ] = useState(false);

  const login = ()=> setLogin(true);
  const logout = ()=> setLogin(false);
  
  return(
    <>
    <Routes>
      <Route path= "/"
      element = {
        isLogin ? (
          <div>
            <h1>Welcome to the app</h1>
            
            <Home />
            <LogoutButton logout={logout} />
          </div>
        ):
        (
          <div>
            <h1>Please login</h1>
            <LoginButton login={login} />
          </div>
        )
      }
      />
    </Routes>
          
    </>
  )
}
export default App;
