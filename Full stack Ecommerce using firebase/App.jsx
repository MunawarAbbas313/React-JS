import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import UserProvider from "./Components/UserProvider.jsx";

function App() {
  //oy bad ma isko false krna ha 
    const [isLoggedIn, setLogin] = useState(false);
    const [isSignUp, setSignUp] = useState(false); // Default to false for login
    const [name, setName] = useState("Login");

    const isLogout = () => {
        setLogin(false);
    };

    const handleLogin = () => {
        setLogin(true);
    };

    const handleSignUp = () => {
        setSignUp(true); // Set to true for signup
        setName("SignUp");
    };

   

    // array becuz of more products
   
    return (
        <UserProvider>
            <NavBar
                isLogin={isLoggedIn}
                isLogout={isLogout}
                setName={name}
                iSsignUp={handleSignUp}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                            onLogin={handleLogin}
                            SetHead={name}
                            isSignup={isSignUp}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Login
                            onLogin={handleLogin}
                            SetHead="SignUp"
                            isSignup={true}
                        />
                    }
                />
                <Route
                    path="/home"
                    element={isLoggedIn ? <Home /> : <Navigate to="/" />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </UserProvider>
    );
}


export default App;
