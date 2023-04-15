import { Outlet,Link } from "react-router-dom"

import paw from "../../assets/paw.png"
import "./Navbar.css"

const Navbar = ()=>{
    return(
        <div className="navbar-container">
            <img className="logo" src={paw}/>                 
                <nav >
                    <ul className="nav-elements">
                        <li>
                            <Link className="nav-element" to="/">Home</Link>
                        </li>
                        <li>
                            <Link  className="nav-element" to="/adddog">Add Dog</Link>
                        </li>
                        <li>
                            <Link  className="nav-element" to="/scandog">Scan Dog</Link>
                        </li>
                        <li>
                            <Link  className="nav-element" to="/test">Test</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
export default Navbar