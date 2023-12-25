import { useContext, useEffect, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
export const Login=()=>{
    // const [emailorNum, setEmilorNum] =useState();
    // const [pass,setPass] =useState();
    const [feilds,setFeilds] =useState({
        emailorNum:"",
        pass:""
    })
    const hadleFeilds =(event)=>{
        const {name,value} = event.target;
        setFeilds((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    const {auth,setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const checkPassword = ()=>{
        if(feilds.emailorNum === "test" && feilds.pass === "test"){
            setAuth(true);
        }else{
            setAuth(false);
        }
        navigate("/");
    }
    
    const handleSubmit = event=>{
        event.preventDefault();
    }

    return <main>
        <form onSubmit={handleSubmit}>
            <div className="form-feilds">
                <h1>Login In</h1>
                <input type="text" placeholder="Emial or Phone number" name="emailorNum" onChange={hadleFeilds} className="Form-text-input" />
                <input type="password" placeholder="Password" className="Form-text-input" name="pass" onChange={hadleFeilds} />
                <button onClick={checkPassword}>Login In</button>
                <div>
                <a href="">Forgot Password?</a>
                </div>
                <p>New to Debug Media?<a href="">Sign up now.</a></p>
            </div>
        </form>
    </main>
}