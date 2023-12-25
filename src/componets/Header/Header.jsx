import { useContext, useState } from "react";
import "./Header.css"
import { MovieApiContext } from "../../context/movieApiContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
export const Header =({handleTheme})=>{
    const {handlesearchValue} =useContext(MovieApiContext);
    const {auth,setAuth} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate("/login");
        setAuth(false);
    }
    
    return <header>
        <div className="First-row">
        <div className="icon-wraper">
            <div className="header-icon"></div>
            <div className="header-name"></div>
        </div>
        <div className="btn-wrap">
        <div className="sun-icon" onClick={handleTheme}></div>
        {auth && <button className="log-btn" onClick={handleLogin}>Logout <div className="log-btn-icon"></div></button>}
        </div>
        </div>
        {auth && (
            <div className="Secont-row">
            <input className="search-input" type="text" onChange={handlesearchValue} placeholder="🔍 Search......"/>
        </div>
        ) }
        
    </header>
}