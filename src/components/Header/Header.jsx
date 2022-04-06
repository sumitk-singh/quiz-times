import "./Header.css";
import {logo} from "../../assets/index";
import {Link } from 'react-router-dom';
export const Header = () => {
    return (
        <>
            <div id="main-container">
                <header>
                    <div className="nav-bar">
                        <div className="brand-logo">
                            <Link to="/"><img  className="brand-logo-img" src={logo} alt="brand-logo" /></Link>
                        </div>
                        <div className="nav-bar-links">
                            <ul className="nav-bar-links-list">
                               
                            </ul>
                        </div>
                        <div className="nav-bar-icons">
                            <ul className="nav-bar-icons-list">
                                <li>Login/ Signup</li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

