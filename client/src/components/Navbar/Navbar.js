import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {CgMenuRight as Hamburger} from 'react-icons/cg'
import logoSvg from '../../assets/Logo.svg';
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
        <Link to ="/" className='"logo-link'>
          <img src={logoSvg} alt="Logo" />
          </Link>
        </div>
        <div className="menu-icon"  onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/adddog">Add Dog</NavLink>
            </li>
            <li>
              <NavLink to="/scandog">Scan Dog</NavLink>
            </li>
            <li>
              <NavLink to="/test">Test</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


// const Navbar = ()=>{
//     return(
//         <div className="navbar-container">
//             <img className="logo" src={paw}/>                 
//                 <nav >
//                     <ul className="nav-elements">
//                         <li>
//                             <Link className="nav-element" to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link  className="nav-element" to="/adddog">Add Dog</Link>
//                         </li>
//                         <li>
//                             <Link  className="nav-element" to="/scandog">Scan Dog</Link>
//                         </li>
//                         <li>
//                             <Link  className="nav-element" to="/test">Test</Link>
//                         </li>
//                     </ul>
//                 </nav>
//         </div>
//     )
// }
// export default Navbar