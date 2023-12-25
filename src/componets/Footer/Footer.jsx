import { useEffect } from "react"
import "./Footer.css"
export const Footer = ()=>{

    return <footer>
        <div className="footer-container">
            <div className="contact-number">
                <p>Questions? Call 1-844-505-2993</p>
            </div>
            
                <div className="FAQ-social-continer">
                <div className="FAQ-continer">
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                </ul>
                <ul>
                <li><a href="">Help Center</a></li>
                    <li><a href="">Corporate Information</a></li>
                </ul>
                <ul>
                <li><a href="">Terms of Use</a></li>
                    <li><a href="">Privacy</a></li>
                </ul>
                </div>

                <div className="social-continer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="language-div">
                <select name="" id="">
                    <option value="">🌐 English</option>
                    <option value="">Hindi</option>
                    <option value="">Malayalam</option>
                </select>
            </div>
        </div>
    </footer>
}