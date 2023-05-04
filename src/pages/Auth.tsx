import { useState } from "react"
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = ({setUser}) =>{
    const [showLogin, setShowLogin] = useState(true);
    if(showLogin){
        return <Login setUser={setUser} setShowLogin={setShowLogin}/>

    }
    else{
        return <Signup setUser={setUser} setShowLogin={setShowLogin}/>
    }
}

export default AuthPage;